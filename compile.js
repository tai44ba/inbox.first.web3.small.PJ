// compile code will go here
const path = require('path')
const fs = require('fs')
const solc = require('solc')


const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol')
const sourse = fs.readFileSync(inboxPath,'utf8')

const input = {
    language: 'Solidity',
    sources: {
      'Inbox.sol': {
        content: sourse,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'].Inbox;

