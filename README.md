# ConsoleCharts
Charts to display in a JavaScript Console. Input an Array with numbers like `[1, 4, 11, 3, 9, 0, 2, 5]` or objects `[{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}]`

### ConsoleCharts class

class `ConsoleCharts` (data `array`)

#### data `array` of `number` values or of `objects` like `{label: "foo", value: 7}`

* A string of characters. Any full name will be shortened to the first letter of the first two words.

### Methods

#### chart(options [optional] `object`)
* Returns multiline string with a vertical bar chart
* Param `options` is optional:
  * `minHeight` `default false` The smallest value will be displayed starting by one step.
  * `pattern` `default false` Every second bar gets a different pattern.

## Preview

```js
let ch = new ConsoleCharts([1, 4, 11, 3, 9, 0, 2, 5]);
console.log(ch.chart());
```

```
 1 │█
 4 │████
11 │███████████
 3 │███
 9 │█████████
 0 │
 2 │██
 5 │█████
   └───────────
```

```js
let ch = new ConsoleCharts([9, 4, 11, 3, 9, 21, 2, 5]);
console.log(ch.chart({minHeight: true}));
```

```
 9 │║████████
 4 │║███
11 │║██████████
 3 │║██
 9 │║████████
21 │║████████████████████
 2 │║█
 5 │║████
   └─────────────────────
```

```js
let ch = new ConsoleCharts([9, 4, 11, 3, 9, 21, 2, 5]);
console.log(ch.chart(minHeight: true, pattern: ture));
```

```
 9 │║████████
 4 │║▓▓▓
11 │║██████████
 3 │║▓▓
 9 │║████████
21 │║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 2 │║█
 5 │║▓▓▓▓
   └─────────────────────
```

```js
let obj = new ConsoleCharts([{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}, {label: "Pears", value: 10}, {label: "Grapes", value: 4}, {label: "Pineapples", value: 5}, {label: "Strawberries", value: 12}, {label: "Watermelons", value: 3}, {label: "Mangos", value: 3}, {label: "Lemons", value: 6}, {label: "Limes", value: 4}, {label: "Peaches", value: 10}]);
console.log(obj.chart({ minHeight: true, pattern: true }));
```

```
      Apples │║███ 5
     Oranges │║▓▓▓▓▓ 7
     Bananas │║██████ 8
       Pears │║▓▓▓▓▓▓▓▓ 10
      Grapes │║██ 4
  Pineapples │║▓▓▓ 5
Strawberries │║██████████ 12
 Watermelons │║▓ 3
      Mangos │║█ 3
      Lemons │║▓▓▓▓ 6
       Limes │║██ 4
     Peaches │║▓▓▓▓▓▓▓▓ 10
             └──────────────
```
#### Todo:
- Sorting ASC & DESC
