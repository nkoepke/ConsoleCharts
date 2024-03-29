![ConsoleCharts](https://github.com/nkoepke/ConsoleCharts/blob/main/images/chart.png?raw=true)

[![GitHub latest commit](https://badgen.net/github/last-commit/nkoepke/ConsoleCharts/main)](https://GitHub.com/nkoepke/ConsoleCharts/commit/)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg?logo=javascript)](https://www.javascript.com)

# ConsoleCharts
Charts to display in your console or terminal. Input an Array with numbers like `[1, 4, 11, 3, 9, 0, 2, 5]` or objects `[{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}]`. Arrays of numbers will be converted into objects with the label of the index + 1.

**Please note: ConsoleCharts is not yet finished. This readme describes the features already working. There is more to come.**

### ConsoleCharts class

class `ConsoleCharts` (data `array`)

#### data `array` of `number` values or of `objects` like `{label: "foo", value: 7}`

### Methods

#### sort(order `string`, sortBy `string`)
* Sorts the array of objects.
* Param `order` can be set to "ASC" or "DESC". Default "ASC"
* Param `sortBy` can be set to "label" or "value", so that you can order either by the values or the label. (If `number`, then numeric. If `string`, then by the first character.) Default "value"
* return `ConsoleCharts`

#### chart(options [optional] `object`)
* Returns multiline string with a vertical bar chart
* Param `options` is optional:
  * `minHeight` `default false` The smallest value will be displayed starting by one step.
  * `pattern` `default false` Every second bar gets a different pattern.
  * `spaced` `default false` Space between bars.
  * `hideLabels` `default false` Hide / Do not display any labels at the axis.
  * `type` `default "sideways-barchart"` Defines the barchart type. Possible Values are:
    * `sideways-barchart` (horizontal bars) ![Alt text](./images/bar-chart-horizontal.svg)
    * `barchart` (vertical bars). ![Alt text](./images/bar-chart.svg)
* return `string`

### Helper Methods

#### dataToArray(property [optional] `string`)
* Converts the data array to a normal array
* To enable reuse of charted data
* Param `property` is optional. It can be "value" or "label". Default "value"
* return `array`
  

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
 1 │║████████ 9
 2 │║███ 4
 3 │║██████████ 11
 4 │║██ 3
 5 │║████████ 9
 6 │║████████████████████ 21
 7 │║█ 2
 8 │║████ 5
   └─────────────────────
```


```js
let ch = new ConsoleCharts([9, 4, 11, 3, 9, 21, 2, 5]);
console.log(ch.chart(minHeight: true, pattern: true));
```

```
 1 │║████████ 9
 2 │║▓▓▓ 4
 3 │║██████████ 11
 4 │║▓▓ 3
 5 │║████████ 9
 6 │║▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 21
 7 │║█ 2
 8 │║▓▓▓▓ 5
   └─────────────────────
```


```js
let obj = new ConsoleCharts([{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}, {label: "Pears", value: 10}, {label: "Grapes", value: 4}, {label: "Pineapples", value: 5}, {label: "Strawberries", value: 12}, {label: "Watermelons", value: 3}, {label: "Mangos", value: 3}, {label: "Lemons", value: 6}, {label: "Limes", value: 4}, {label: "Peaches", value: 10}]);
console.log(obj.chart({ pattern: true }));
```

```
      Apples │█████ 5
     Oranges │▓▓▓▓▓▓▓ 7
     Bananas │████████ 8
       Pears │▓▓▓▓▓▓▓▓▓▓ 10
      Grapes │████ 4
  Pineapples │▓▓▓▓▓ 5
Strawberries │████████████ 12
 Watermelons │▓▓▓ 3
      Mangos │███ 3
      Lemons │▓▓▓▓▓▓ 6
       Limes │████ 4
     Peaches │▓▓▓▓▓▓▓▓▓▓ 10
             └───────────────
```


```js
let obj = new ConsoleCharts([{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}, {label: "Pears", value: 10}, {label: "Grapes", value: 4}, {label: "Pineapples", value: 5}, {label: "Strawberries", value: 12}, {label: "Watermelons", value: 3}, {label: "Mangos", value: 3}, {label: "Lemons", value: 6}, {label: "Limes", value: 4}, {label: "Peaches", value: 10}]);
obj.sort("DESC", "label");
console.log(obj.chart({ pattern: true }));
```

```
 Watermelons │███ 3
Strawberries │▓▓▓▓▓▓▓▓▓▓▓▓ 12
  Pineapples │█████ 5
       Pears │▓▓▓▓▓▓▓▓▓▓ 10
     Peaches │██████████ 10
     Oranges │▓▓▓▓▓▓▓ 7
      Mangos │███ 3
       Limes │▓▓▓▓ 4
      Lemons │██████ 6
      Grapes │▓▓▓▓ 4
     Bananas │████████ 8
      Apples │▓▓▓▓▓ 5
             └───────────────
```


```js
let obj = new ConsoleCharts([{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}, {label: "Pears", value: 10}, {label: "Grapes", value: 4}, {label: "Pineapples", value: 5}, {label: "Strawberries", value: 12}, {label: "Watermelons", value: 3}, {label: "Mangos", value: 3}, {label: "Lemons", value: 6}, {label: "Limes", value: 4}, {label: "Peaches", value: 10}]);
console.log(obj.sort("ASC", "value").chart({ pattern: true }));
```

```
 Watermelons │███ 3
      Mangos │▓▓▓ 3
      Grapes │████ 4
       Limes │▓▓▓▓ 4
      Apples │█████ 5
  Pineapples │▓▓▓▓▓ 5
      Lemons │██████ 6
     Oranges │▓▓▓▓▓▓▓ 7
     Bananas │████████ 8
       Pears │▓▓▓▓▓▓▓▓▓▓ 10
     Peaches │██████████ 10
Strawberries │▓▓▓▓▓▓▓▓▓▓▓▓ 12
             └───────────────
```


```js
let obj = new ConsoleCharts([{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}, {label: "Pears", value: 10}, {label: "Grapes", value: 4}, {label: "Pineapples", value: 5}, {label: "Strawberries", value: 12}, {label: "Watermelons", value: 3}, {label: "Mangos", value: 3}, {label: "Lemons", value: 6}, {label: "Limes", value: 4}, {label: "Peaches", value: 10}]);
console.log(obj.chart({ type: "barchart", spaced: true, pattern: true}));
```

```
 │            █
 │            █
 │      ▓     █         ▓
 │      ▓     █         ▓
 │    █ ▓     █         ▓
 │  ▓ █ ▓     █         ▓
 │  ▓ █ ▓     █     ▓   ▓
 │█ ▓ █ ▓   ▓ █     ▓   ▓
 │█ ▓ █ ▓ █ ▓ █     ▓ █ ▓
 │█ ▓ █ ▓ █ ▓ █ ▓ █ ▓ █ ▓
 │█ ▓ █ ▓ █ ▓ █ ▓ █ ▓ █ ▓
 │█ ▓ █ ▓ █ ▓ █ ▓ █ ▓ █ ▓
 └────────────────────────
  Apples (5)
    Oranges (7)
      Bananas (8)
        Pears (10)
          Grapes (4)
            Pineapples (5)
              Strawberries (12)
                Watermelons (3)
                  Mangos (3)
                    Lemons (6)
                      Limes (4)
                        Peaches (10)
```


```js
let objV = new ConsoleCharts([{label: "Apples", value: 5}, {label: "Oranges", value: 7}, {label: "Bananas", value: 8}, {label: "Pears", value: 10}, {label: "Grapes", value: 4}, {label: "Pineapples", value: 5}, {label: "Strawberries", value: 12}, {label: "Watermelons", value: 11}, {label: "Mangos", value: 10}, {label: "Lemons", value: 6}, {label: "Limes", value: 4}, {label: "Peaches", value: 10}]);
console.log(objV.chart({ type: "barchart", spaced: true, pattern: true, hideLabels: true, minHeight: true}));
```

```
 │            █           
 │            █ ▓         
 │      ▓     █ ▓ █     ▓ 
 │      ▓     █ ▓ █     ▓ 
 │    █ ▓     █ ▓ █     ▓ 
 │  ▓ █ ▓     █ ▓ █     ▓ 
 │  ▓ █ ▓     █ ▓ █ ▓   ▓ 
 │█ ▓ █ ▓   ▓ █ ▓ █ ▓   ▓ 
 │█ ▓ █ ▓ █ ▓ █ ▓ █ ▓ █ ▓ 
 │═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ ═ 
 └────────────────────────
```
