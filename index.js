'use strict';

var Blink1 = require('node-blink1');

module.exports = function (options) {
    var self = this;

    this.jasmineStarted = function (suiteInfo) {
        try {
            self.fail = false;
            self.blink1 = new Blink1();
            self.yellow();
        } catch(e) {
            console.log(e);
        }
    };

    this.specDone = function (result) {
        if (result.failedExpectations.length > 0) {
            self.fail = true;
            self.red();
        }
    };

    this.jasmineDone = function () {
        if (!self.fail) {
            self.green();
            self.blink1.close();
            self.blink1 = undefined;
        }
    };

    this.yellow = function () {
        self.blink1.fadeToRGB(100, 155, 155, 0);
    };

    this.red = function () {
        self.blink1.setRGB(255, 0, 0);
    };

    this.green = function () {
        self.blink1.setRGB(0, 255, 0);
    };
};
