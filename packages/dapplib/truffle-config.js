require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain history idea knife flee spike'; 
let testAccounts = [
"0xd313a471e35f009777060518423555a68c8414f9cd2806c42d2a38b80fab5523",
"0x3381df513fce9f42aef52a45a91c92659b6bd694cd890c3c743877ebeb41d2e6",
"0x644994f19bc57aa25c2c6d045f000a12b41e5b4db223ebcd99e41c91f7ba36f3",
"0x66f4bb04413d09e0ac894f62c37d28b7650296834586d073a924fe25a66fa916",
"0xa805251ad86f0a4878c87ee68ead94fd35228e8ffc0ad69d929f199d80a7f329",
"0xd8f934e9ceb1634eede9dd6e8a04d72e45f8dbc6f25204fdb13f9f981815798a",
"0x47056909dcd6faa2c6cc74e3c1f1519685e1f97387e56c4ea2a39e8f1bc0f48d",
"0xd569b8479be64775bd5060622c20cbcd68af22a48b503be3268b34a8aa9d2257",
"0x9a72a1d6d63158ca389f22d7467caf5b24461563ca274b34f001259fffa6cec7",
"0x7f63ac99af438d8642a7ae74c0374d5f0a6340c3519f652165697f28d4129ca3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

