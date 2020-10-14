
const ethAddress = '0x0000000000000000000000000000000000000000';
const production = false;
const serverUrl = 'https://staging.xpa.exchange/ethrpc';
const xpaExchange = '0x3a18456d4f9ebbc627f173adf09a4b1f233e2bfe';
const XPAAsset = '0x905605680fa7cbbdb6d8ed53809a1e24d02381c2';
const XPA = '0x958ae55ebba860583bd291aa1003ba07ddac8435';
const assetToken = {
    USX: '0x172afbb76bc5ed20f449db64954f87da8ba4baf4',
    TWX: '0xa0e03ba54b957db1fb8dd82d5b23fbf98bd481aa',
    JPX: '0x74c5772e099637ac8e178488bf465693dd5ce1ec',
    HKX: '0x093b40232fae344559e9a9a0cf25ad5d16fed2cb',
    CNX: '0x2ab7e1cf602d2b06e5a1c210c86b024161c28733',
    EUX: '0x1fe063804f60351f44fe2f1fa3b26189e9bc1044'
};
const news = {
    source: 'techcrunch',
    apiKey: '77a82f77a75442e19e41d3fcd76a255f',
    query: 'crypto'
};
const tideWalletAndroid = 'https://play.google.com/store/apps/details?id=com.isuncloud.tidewallet';
const tideWalletiOS = 'https://itunes.apple.com/uy/app/tidewallet/id1332973594';
const fdb = {
    apiKey: 'AIzaSyCeO2kyOAXf7X9JLnR9adBZKMa-j0kDXl8',
    authDomain: 'xpaex-staging.firebaseapp.com',
    databaseURL: 'https://xpaex-staging.firebaseio.com',
    projectId: 'xpaex-staging',
    storageBucket: 'xpaex-staging.appspot.com',
    messagingSenderId: '989752675261'
};
const finalConfig = {
    ethAddress,
    production,
    xpaExchange,
    XPAAsset,
    serverUrl,
    XPA,
    assetToken,
    news,
    tideWalletAndroid,
    tideWalletiOS,
    fdb
};
