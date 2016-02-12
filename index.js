'use strict';

module.exports = function (options) {
    this.jasmineStarted = function (suiteInfo) {
        console.log("Blink1!", suiteInfo);
    };
};

//var Blink1 = require('node-blink1');
//var blink1 = new Blink1();
//blink1.fadeToRGB(300, 255, 0, 255, function () {
//    blink1.off();
//});
