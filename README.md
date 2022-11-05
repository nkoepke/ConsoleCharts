# ConsoleCharts
Charts to display in a JavaScript Console. Input an Array with numbers like `[1, 4, 11, 3, 9, 0, 2, 5]`

### ConsoleCharts class

class `ConsoleCharts` (data `array`)

#### data `array`

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
