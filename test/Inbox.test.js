const ganache = require("ganache");
const { Web3 } = require("web3");

// updated ganache and web3 imports added for convenience

// contract test code will go here
const assert = require("assert");
const web3 = new Web3(ganache.provider());

const { abi, evm } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object , arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("depoloys a contract", () => {
    assert.ok(inbox.options.address);
  });
  it("has a default meessage", async () => {
    const message = await inbox.methods.message().call()
    assert.equal(message , "Hi there!")
  })
  it("can change the message", async () => {
    await inbox.methods.setMessage('bye').send({from:accounts[0]})
    const message = await inbox.methods.message().call()
    assert.equal(message , "bye")
  })
});







// class Car {
//     park(){
//         return 'stopped'
//     }
//     drive(){
//         return 'vroom'
//     }
// }

// let car;
// beforeEach(()=>{
//     car = new Car()
// })

// describe('Car',()=>{
//     it('can perk',()=>{
//         assert.equal(car.park() , "stopped")
//     })
//     it('can drive',()=>{
//         assert.equal(car.drive() , "vroom")
//     })
// })
