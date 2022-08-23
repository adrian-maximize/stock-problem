const fs = require('fs');

class Main {
    constructor(width, length, title, input_arg) {
        this._width = width
        this._length = length
        this._title = title
        this._input_arg = input_arg
    };

    input_read(length, input_arg) {
        console.log(length)
        input_arg.forEach(function input_arg(input, index) {
            console.log(index + ": " + input)
        });
        const material_cut = new Material_cut(length, input_arg);
        material_cut.object_cut(material_cut._length, material_cut._input_arg)
    };
};


class Material_cut {
    constructor(width, length, title, input_arg) {
        this._width = width
        this._length = length
        this._title = title
        this._input_arg = input_arg
    }

    object_cut() {
        const fs=require('fs');
        fs.readFile('./config/glass.json','utf-8',(err,jsonString)=>{
            if(err){
                console.log(err);
            
            } else {
                try {
                    let jsonData = JSON.parse(jsonString)
                    console.log(jsonData);
                } catch(err) {
                    console.log(err);
                };
            };
        });
    };
};

let x = 10;
let y = 20;
let input_arg = process.argv
let string = "AHHHH"
const main = new Main(x, y, string, input_arg);
main.input_read(main._length, main._input_arg)
