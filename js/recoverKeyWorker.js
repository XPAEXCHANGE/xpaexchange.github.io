self.importScripts('./keythereum/keythereum.min.js');

self.addEventListener('message', (e) =>
{
    const { password, wallet } = e.data;
    try
    {
        const key = keythereum.recover(password, wallet).toString('hex');
        self.postMessage(key);
    }
    catch (err)
    {
        self.postMessage('error');
    }
    finally
    {
        self.close();
    }
});
