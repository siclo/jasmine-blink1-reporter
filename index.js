'use strict';

var Blink1 = require('node-blink1');

module.exports = function (options) {
    var self = this;

    this.jasmineStarted = function (suiteInfo) {
        self.fail = false;
        self.openBlink();
        self.yellow();
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
        }
    };

    this.openBlink = function () {
        if (!self.blink1) {
            try {
                self.blink1 = new Blink1();
            } catch(e) {
                console.log(e, e.stack.split('\n'));
            }
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
