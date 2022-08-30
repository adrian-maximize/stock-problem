import { howToCutBoards1D } from "stock-cutting"

// https://github.com/ccorcos/couch

const bladeSize = 0
const stockSizes = [{ size: 1, cost: 0 }]

const input1 = [
	{ size: 0.1, count: 10 },
	{ size: 0.5, count: 17 },
	{ size: 0.3, count: 10 }
]
const output1 = howToCutBoards1D({
	stockSizes: stockSizes,
	bladeSize: bladeSize,
	requiredCuts: input1
})

console.log(output1[0].cuts)

const initialValue = 0;
const sumWithInitial = output1[0].cuts.reduce(
	(previousValue, currentValue) => previousValue + currentValue,
	initialValue
);

console.log(sumWithInitial);
