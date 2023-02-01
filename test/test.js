const ConsoleCharts = require('../src/ConsoleCharts.js');

let arr = new ConsoleCharts([5, 7, 8, 10, 4, 5, 12, 3, 3, 6, 4, 10]);
arr.sort("ASC", "value");
console.log(arr.chart({ minHeight: true, pattern: true }));

let obj = new ConsoleCharts([{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}, {label: "Pears", value: 10}, {label: "Grapes", value: 4}, {label: "Pineapples", value: 5}, {label: "Strawberries", value: 12}, {label: "Watermelons", value: 3}, {label: "Mangos", value: 3}, {label: "Lemons", value: 6}, {label: "Limes", value: 4}, {label: "Peaches", value: 10}]);
obj.sort("ASC", "value");
console.log(obj.chart({ pattern: true, spaced: true, hideLabels: true}));

let objV = new ConsoleCharts([{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}, {label: "Pears", value: 10}, {label: "Grapes", value: 4}, {label: "Pineapples", value: 5}, {label: "Strawberries", value: 12}, {label: "Watermelons", value: 11}, {label: "Mangos", value: 10}, {label: "Lemons", value: 6}, {label: "Limes", value: 4}, {label: "Peaches", value: 10}]);
console.log(objV.chart({ type: "barchart", spaced: true, pattern: true, hideLabels: true, minHeight: true}));
console.log(objV.chart({ type: "barchart", spaced: false, pattern: true, hideLabels: false, minHeight: false}));