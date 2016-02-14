'use strict';

var Blink1 = require('node-blink1');

module.exports = function (options) {
    var self = this;

    this.jasmineStarted = function (suiteInfo) {
        try {
            self.blink1 = new Blink1();
            self.yellow();
            console.log("Blink1!", suiteInfo);
        } catch(e) {
            console.log(e);
        }
    };

    this.specDone = function (result) {
        console.log(result);
        if (result.failedExpectations.length > 0) {
            self.red();
        }
    };

    this.yellow = function () {
        self.blink1.fadeToRGB(100, 155, 155, 0);
    };

    this.red = function () {
        self.blink1.setRGB(255, 0, 0);
    };
};

//var Blink1 = require('node-blink1');
//var blink1 = new Blink1();
//blink1.fadeToRGB(300, 255, 0, 255, function () {
//    blink1.off();
//});
