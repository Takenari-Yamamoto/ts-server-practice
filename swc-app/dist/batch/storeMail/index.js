"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _connectMail = require("../../../src/utils/connectMail");
const main = async ()=>{
    console.log("Starting main function");
    try {
        const res = await (0, _connectMail.connectMail)("hoge@hoge.com", "xxxxxxxx");
        console.log(res);
    } catch (error) {
        console.error("Error in connectMail:", error);
    }
    console.log("Hello World");
};
main();

