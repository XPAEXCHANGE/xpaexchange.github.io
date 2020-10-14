self.importScripts('./keythereum/keythereum.min.js');

self.addEventListener('message', (e) =>
{
    const params = { keyBytes: 32, ivBytes: 16 };
    const { password } = e.data;
    keythereum.create(params, (dk) =>
    {
        // export keyStore
        const options = {
            kdf: 'scrypt',
            cipher: 'aes-128-ctr',
            kdfparams: {
                dklen: 32,
            }
        };

        keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options, (keyObject) =>
        {
            // keyObject.address = `0x${keyObject.address}`;
            const wallet = keyObject;
            const data = `text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(keyObject))}`;

            try
            {
                const key = keythereum.recover(password, wallet).toString('hex');
                self.postMessage({ key, data, wallet, password });
            }
            catch (error)
            {
                self.postMessage({ error });
            }
            finally
            {
                self.close();
            }
        });
    });
});
