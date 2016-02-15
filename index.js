'use strict';

var blink1 = require('./blink1');

module.exports = function (options) {
    var self = this;

    this.jasmineStarted = function (suiteInfo) {
        self.fail = false;
        blink1.toYellow();
    };

    this.specDone = function (result) {
        if (result.failedExpectations.length > 0) {
            self.fail = true;
            blink1.toRed();
        }
    };

    this.jasmineDone = function () {
        if (!self.fail) {
            blink1.toGreen();
        }
    };
};
