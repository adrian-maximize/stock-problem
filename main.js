const fs = require('fs');

class Main {
    constructor(width, length, title, terminal_arg) {
        this._width = width
        this._length = length
        this._title = title
        this._terminal_arg = terminal_arg
    };

    terminal_read(length, terminal_arg) {
        console.log(length)
        terminal_arg.forEach(function terminal_arg(input, index) {
            console.log(index + ": " + input)
        });
    };

    cut(title) {
        console.log(title)

    };
};

let x = 10;
let y = 20;
let terminal_arg = process.argv
let string = "AHHHH"
const main = new Main(x, y, string, terminal_arg);
main.cut(main._title)
main.terminal_read(main._length, main._terminal_arg)
