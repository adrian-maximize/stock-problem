const fs = require('fs');

class Main {
    constructor(data) {
        this._input_config_name = input_config_name;
    };

    input_read(input_config_name) {
        fs.readFile(`./config/${input_config_name}.json`,'utf-8',(err,jsonString)=>{
            if(err){
                console.log(err);
            
            } else {
                try {
                    let jsonData = JSON.parse(jsonString)
    
                    
                    const material_cut = new Material_cut(input_config_name, jsonData);
                    material_cut.object_cut(material_cut._input_config_name ,material_cut._jsonData)
                } catch(err) {
                    console.log(err);
                };
            };
        });
    };
};


class Material_cut {
    constructor(input_config_name, jsonData) {
       this._input_config_name = input_config_name;
       this._jsonData = jsonData;
    }

    object_cut(input_config_name, jsonData) {
        console.log(jsonData.object.cut)
        let object_cut = jsonData.object.quant*jsonData.object.cut
        console.log(object_cut) 

    };
};


let input_arg = process.argv
let input_config_name = input_arg[2].toLowerCase()
const main = new Main(input_config_name);
main.input_read(main._input_config_name)
