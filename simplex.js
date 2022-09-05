var solver = require("javascript-lp-solver");
  

let results,
  model = {
    "optimize": "capacity",
    "opType": "max",
    "constraints": {
        "plane": {"max": 500},
        "cost": {"max": 5000}
    },
    "variables": {
        "A": {
            "capacity": 9,
            "plane": 3,
            "cost": 1
        },
        "B": {
            "capacity": 7,
            "plane": 1,
            "cost": 1
        }
    },
};

results = solver.Solve(model);
console.log(results);










// var simplex = require('simplex-solver');

// var result = simplex.maximize('x + y + z', [
//   '15x + 12z + 10z <= 300',
//   '22y + 14z + 16z <= 200',
//   '12x + 12y + 24z <= 100'
// ]);

// console.log(result);
// 12x₁ + 18x2 + 22x3 + 19x4
// 1,5x₁1,2x3 + x4 ≤ 120
// 2,2x2 + 1,4x3 + 1,6x4≤ 200
// 1,2x₁ + 2x₂ + 2,4x3 ≤ 250