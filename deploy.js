const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
require('dotenv').config();
const { abi, evm } = require('./compile');
 

// const provider = new HDWalletProvider(
//     'undo raw gauge cheese become column sponsor mask address apology error weather',
//     'https://sepolia.infura.io/v3/daf6b7a9b34141748687a1aace408de6'
// );

const provider = new HDWalletProvider(
    process.env.YOUR_MNEMONIC,
    process.env.YOUR_INFURA_URL
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('attempting to deploy from account from: ',accounts[0]);

    const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });

    console.log('contract deployed to: ',result.options.address)
    provider.engine.stop()
}

deploy()



