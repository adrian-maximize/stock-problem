import * as fs from 'fs';
import { howToCutBoards1D } from "stock-cutting"

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
                    material_cut.cutting(material_cut._input_config_name ,material_cut._jsonData)
                } catch(err) {
                    console.log(err);
                };
            };
        });
    };
};


class Material_cut {
    constructor(input_config_name, jsonData, stock_cutting) {
       this._input_config_name = input_config_name;
       this._jsonData = jsonData;
       this._stock_cutting = stock_cutting;
    }

    
    cutting(input_config_name, jsonData, stock_cutting) {

        const bladeSize = 0
        const stockSizes = [{ size: 1, cost: 0 }]
        const input1 = [
            { size: 0.1, count: 10 },
            { size: 0.5, count: 17 },
            { size: 0.3, count: 10 }
        ]
        
        stock_cutting = howToCutBoards1D({
            stockSizes: stockSizes,
            bladeSize: bladeSize,
            requiredCuts: jsonData.object
        });

        const initialValue = 0;
        const sumWithInitial = stock_cutting[0].cuts.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        console.log(sumWithInitial)
    };
};


let input_arg = process.argv
let input_config_name = input_arg[2].toLowerCase()
const main = new Main(input_config_name);
main.input_read(main._input_config_name)
