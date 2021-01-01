require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift random rural history just private slot gasp'; 
let testAccounts = [
"0x5f8dec66702fd0880c2877b0c9f20d59789f1e12f91f51a80546fcc8a9b14617",
"0x6ffa08401839d2d13fb116eedb813194f6c3bcad69bbe716b7bf660bc4c87936",
"0x8d4d544d18437238f8b7d6e8deb1a9f144c0b52615ba80425418ea50f476dcc9",
"0xb19e6ad4fbf3f947e1e3c0e1370de44a855b18f5bf1f83ebe899ce1a76f7b58d",
"0x2b8923808e5d7fbfa442a067bb5c2a33f1aa176624f8409800a8c1793f55c169",
"0x0b173a3043be0a025b3434cbc67f2a05ba93392ba148fc2de5712a99f2da0c3f",
"0xa935a60d644614cedcb8cdeabc8b2470049bea92bf41805837c770043d97a300",
"0x5e95c7f5dfca45df15c9fa6e66b9254351f28804e9d01bf4f897091ef86ff0fe",
"0x9d4e9e2ac60b5754b039834ed428363f33d61d0d81e2886b775e8b94a9649bc0",
"0x3b9747eb52154fd41990a5ddd2134077c12797457136f74d7f20d4baa1df9365"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
