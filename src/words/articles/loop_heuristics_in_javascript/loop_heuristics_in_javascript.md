---
title: Loop Heuristics in Javascript
subtitle: Different ways of looping in JS and my personal preferences to avoid complexity and errors.
date: 2019-01-24
banner: confluence_banner.jpg
thumbnail: confluence_thumb.jpg
tags:
  - tech
  - syntax
  - javascript
  - code
---

We usually "loop" through lists of data in order to perform actions upon each
element in the list (e.g., transform each element, print each element, search
for a matching element, etc.). In Javascript, it is honestly a very rare
context in which you want to "loop" when you do not have a list or collection
to loop through.


Heuristic Advice
----------------

*In general, prefer iterator functions, or `for` loops.*

- if you don't have an iterable, it might be easier to convert your data
  - `Array.from(myData)`
  - `Object.keys(myObj)`
  - `Object.values(myObj)`
- you might actually need to use a `while` loop, but this should be a last
  resort
- you might actually need to use a "bad practice" composition for performance
  optimization, but this should be avoided at all costs, and if it must be
  done, label it with EXPLICIT WARNINGS about why you need to do it, and that
  the *only* reason it is being done is to take advantage of some interpreter
  optimization strategy (e.g., using `goto` + `label` can actually be a lot
  faster than other looping methods, but it is *very* confusing to read)


My Preferrences (in order of preference)
---------------

- `array.func` (`.map`, `.reduce`, `.find`, `.some`, etc.)
- `array.forEach` (usually more readable than for-in or for-of)
- `for (value of iterable)` (iterates over object *values*)
- `for (key in enumerable)` (iterates over user-defined object *keys*)
- `for (let i; i < length; i++)`


Increased Risk
--------------

- `while`
- `do while`
- `loop`
- `continue`
- `goto`
- `label`
- `call`
- `apply`
- `this`
- `var`


Avoid Mutating Data
-------------------

It is generally a better practice to choose a computing method which eliminates
(or at least minimizes) mutating data. Mutating data is difficult to reason
about. This increases the risk of errors, ability to scale/extend/change the
code, and contributes to technical debt over time.

So, for example, in the case of loops, rather than mixing scopes and mutating
variables like this:

```javascript
const values = [1, 2, 3, 4, 5]
let changedValues = []

for (val of values) {
  changedValues.push(val + 1)
}

console.log(changedValues)
```

or this:

```javascript
const values = [1, 2, 3, 4, 5]

for (const i; i < values.length; i++) {
  values[i] = values[i] + 1
}

console.log(values)
```

instead, try this:

```javascript
const values = [1, 2, 3, 4, 5]
const changedValues = values.map(val => val + 1)

console.log(changedValues)
```

This way, `changedValues` is only ever assigned a value once, and doesn't change
after that. You are guaranteed that by the time you print it out that it is
what you expect it to be.

What happens when you mutate elements is that you open up the possibility that
the value could change somewhere else in the code, making it more difficult to
think about what value will be printed out:

```javascript
const values = [1, 2, 3, 4, 5]
let changedValues = []

for (val of values) {
  changedValues.push(val + 1)
}

// ...many more lines of code might get added here

if (someCondition) {
  changedValues = ['new', 'values', 'here']
}

// ...many more lines of code might get added here

console.log(changedValues) // it's not obvious what values get used here
```


References
----------

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
