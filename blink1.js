var Blink1 = require('node-blink1');
var blink1 = openBlink();

exports.toYellow = function () {
    exports.fadeToRGB(100, 155, 155, 0);
}

exports.toRed = function () {
    exports.setRGB(255, 0, 0);
}

exports.toGreen = function () {
    exports.setRGB(0, 255, 0);
}

exports.setRGB = function (red, green, blue) {
    if (blink1) {
        blink1.setRGB(red, green, blue);
    }
}

exports.fadeToRGB = function (fadeMillis, red, green, blue) {
    if (blink1) {
        blink1.fadeToRGB(fadeMillis, red, green, blue);
    }
}

function openBlink() {
    try {
        return new Blink1();
    } catch(error) {
        if (error.message !== 'No blink(1)\'s could be found') {
            console.log(e, e.stack.split('\n'));
        }
    }
}