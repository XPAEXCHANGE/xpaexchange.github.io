const ethAddress = '0x0000000000000000000000000000000000000000';

// if is production = true, false for develop
const production = true;

const serverUrl = 'https://rpc.xpa.exchange';

const xpaExchange = '0x8ea74569c1b9bbb13780114b6b5e93396910070a';
const XPAAsset = '0xa1fb31fb49b6032a9b3b012ba21de5cedc38163b';
const XPA = '0x90528aeb3a2b736b780fd1b6c478bb7e1d643170';
const assetToken = {
    USX: '0x0080d4b7be95b550a69e8789340baa38da771743',
    TWX: '0x6c2103a58f649713dede00671523c5f92e9b5a29',
    JPX: '0xe5addf718d243079fa60098e1af94e9d68ee1c63',
    HKX: '0xa325aaa53de6ae1ad7df6671162beea340ac08c6',
    CNX: '0xa5279187e2106e6a99530b962b880a2ae31bf8c8',
    EUX: '0xfd4e592b9288b36bddff3d6ec173d86766b52f41'
};
const news = {
    source: 'techcrunch',
    apiKey: '77a82f77a75442e19e41d3fcd76a255f',
    query: 'crypto'
};
const tideWalletAndroid = 'https://play.google.com/store/apps/details?id=com.isuncloud.tidewallet';
const tideWalletiOS = 'https://itunes.apple.com/uy/app/tidewallet/id1332973594';
const fdb = {
    apiKey: 'AIzaSyA7X7r1VYRmttsHmmEqLPdEX9UmAxHLjJY',
    authDomain: 'xpaex-e05f2.firebaseapp.com',
    databaseURL: 'https://xpaex-e05f2.firebaseio.com',
    projectId: 'xpaex-e05f2',
    storageBucket: 'xpaex-e05f2.appspot.com',
    messagingSenderId: '835171840614'
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
