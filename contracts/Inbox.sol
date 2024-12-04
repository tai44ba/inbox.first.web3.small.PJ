// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // function Inbox(string initalMessage) public  {
    //     message = initalMessage;
    // }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
    
}