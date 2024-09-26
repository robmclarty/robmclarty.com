---
title: Code Stease
subtitle: A collection of small JS syntax variations and how they might help organize code for better legibility.
date: 2017-05-29
banner: sun_flower_banner.jpg
thumbnail: sun_flower_thumb.jpg
tags:
  - tech
  - syntax
  - javascript
  - code
---

Compact nested brackets
-----------------------

One style thing I've found myself gravitating towards is when I have a block
that includes object literals contained in either square or round parentheses, I
like combining them into a single line if there is only one object literal (or
function definition) like this:

```javascript
myPromise()
  .then(() => {
    // do something
  })
```

or

```javascript
[{
  var1: 1,
  var2: 2,
  var3: 3
}]
```

This is subjective, but I like how it makes things more compact and tad more
legible. However, if you have multiple objects, it may warrant additional
nesting to maintain clarity.

```javascript
[
  {
    var1: 1,
    var2: 2,
    var3: 3
  },
  {
    var1: 1,
    var2: 2,
    var3: 3
  }
]
```

But you could do it like this too:

```javascript
[{
  var1: 1,
  var2: 2,
  var3: 3
}, {
  var1: 1,
  var2: 2,
  var3: 3
}]
```

I just find something gets lost in a sea of nested brackets and it's hard to
understand. Making it more compact helps group chunks together imo.


var
---

I know you're inheriting someone else's code, but I'd keep an eye out for any
`var` statements and update them to `const` or (if you have to) `let` just to
make the scoping issues more obvious. I'm sure there's a ton of existing `var`s
in there that would take forever to change all at once, but yeah, just something
to think about as you're wondering around in there ;)


Always declare variables explicitly
-----------------------------------

IMHO you should always explicitly declare variables and not use the shorthand
comma syntax. I find it very easy to miss that a new variable is being declared,
which can lead to hard-to-find errors. It's really not that hard to just type
`const` or `let` and make it extremely dumb and obvious that a new variable is
being declared. I see no advantage to chaining variable definitions together
with commas; only downsides.

First (and I'm not sure how this file works so you're in a better position to
know what to use here) I would always use `const` unless you absolutely have to
use `let` (because the value is changing.

Second, both `params` and `query` are being defined one after the other and it's
slightly confusing, almost as if `query` is a continuation of the `params`
definition in some kind of promise/function chain. I would simply remove the
comma and add another `const` to make it absolutely clear (and line up the
bottom bracket for the `params` definition with its corresponding
`let`/`const`).


Complex conditionals
--------------------

In the same file on line 144, there's a double-nested `if` statement. This is
another one of those things that makes code more complex to reason about. It's
not wrong, but maybe it could be written differently to make it easier to
understand.

For example, instead of:

```javascript
if (!response.ok) {
  if (response.status === 403) {
    return response.json();
  } else {
    throw new Error("Fetch failed");
  }
} else {
  return response.json();
}
```

...maybe something like this (which also removes some duplication):

```javascript
const notAuthenticated = !response.ok && response.status === 403;

if (response.ok || notAuthenticated) {
  return response.json();
}

throw new Error("Fetch failed");
```

I always like storing boolean conditions in variables that describe what they
mean (because it's pretty much never easy to understand by looking at it). Then
you can use the descriptive variable in the logic and it reads more like a
sentence (in English) :)


Multiline boolean statements
----------------------------

I like defining multi-line boolean statements by using a double-indent. This
allows me to keep the beginning of the definition with the opening/closing
brackets (saving space and making this chunk easier to parse eith my eyes). It
also separates the following code from the boolean code. And it happens to line
up with anything that's defined on the same line as the opening bracket ;)

So, instead of something like this:

```javascript
if (
  someThing &&
  anotherThing ||
  yetAnotherThing ||
  anotherThingAltogether
) {
  doSomethingHere();
}
```

...do the following (this is also subjective in that where you break lines is
arbitrary, but I like to try and group like things together. I also like starting
multiple lines of a condition with the logic symbol so you can read top to
bottom on the left side "thing 1 OR thing 2 OR thing 3" which (perhaps) makes it
just a tiny bit easier to quickly parse with your eyes?

```javascript
if (someThing && anotherThing
    || yetAnotherThing
    || anotherThingAltogether
) {
  doSomethingHere();
}
```


Multi-line React Component Props
--------------------------------

Just to go along with the above, I also like using a double-indent for
multi-line React component props for the same reasons.

```jsx
<MyComponent
    prop1={something}
    prop2={anotherThing}
    prop3={yetAnotherThing}>
  <div>
    Component children.
  </div>
</MyComponent>
```


Returning boolean values
------------------------

Generally I like to return values directly rather than using a conditional to
then return an explicit true/false.

Maybe function code could be done differently so that there is just one `return`
which returns a true/false based on the values of the variables it's returning.
Maybe even make up some new descriptive variables that make things more obvious.

So instead of:

```javascript
if (!filters.project) {
  return false;
}
```

Do this:

```javascript
return !filters.project;
```

...or, if you're checking for the positive existence of a thing:


```javascript
return typeof filters.project !== 'undefined';
```

or (and this should probably be avoided, but it forces the casting of the value
to Boolean, but `true`):

```javascript
return !!filters.project;
```


Group larger chunks into variables
----------------------------------

This is another completely subjective thing, but one strategy to help keep code
clear is to group larger chunks of stuff together into variables, especially
when it's being used in a longer chain of function calls/promises.

This isn't always necessary if it's not a lot of code, but generally if I see
things getting nested more than 2 levels I always wonder if there's a chunk that
could be broken out, stored in a variable, and then the code kept at a more sane
level of nesting.

For example, in one of my clients' component/module, there
is a `fetch` call which includes all its parameters inline, followed by some
other logic in the resulting promise that's returned. Nothing wrong with that,
but as you've already noticed because of the indenting, it's not entirely easy
to follow where the `fetch` params end and the resulting promise begins. This
could be made clearer by simply putting all those params in a variable. Even if
you're not going to use that variable more than once, it helps describe what's
happening more clearly.

So, instead of:

```javascript
fetch('/api/client/' + encodeURIComponent(this.customer.name), {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    enforce2FA: new2FA
  }),
  credentials: 'same-origin'
})
  .then(response => {})
  .catch(error => {});
```

...maybe do something like this which (perhaps) enables an easier parsing of
each logical step that is taking place. This also makes it easier to test,
inspect values, and/or move blocks of code around to other files without being
tangled up with other local variables:

```javascript
const url = `/api/client/${ encodeURIComponent(this.customer.name) }`;

const data = JSON.stringify({
  enforce2FA: new2FA
});

const params = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: data,
  credentials: 'same-origin'
};

fetch(params)
  .then(response => {})
  .catch(error => {});
```


Don't use `while`
-----------------

I think `while` and `do/while` should simply be avoided. It's harder to reason
about and can lead to new sets of potential errors. Usually where these are
used, the same logic can be expressed differently using a `for` loop, or better
yet, a functional array `map`.

Instead of:

```javascript
const openPaths = [];

while (tokens.length > 1) {
  const path = tokens.join("/");

  openPaths.push(path);
  tokens.pop();
}
```

Something like this:

```javascript
const openPaths = tokens.map(token => token.join('/'));
```


If it doesn't fit on one line, break it up
------------------------------------------

This is a pretty long line with a bunch of complex stuff happening in it. I'd
just break it up into multiple lines to make it easier to read. Personally, I
have a hairline drawn in my editor at character 80 and I try to keep all my code
within that boundary (I'll go over sometimes depending on the circumstances).
This is usually enough room to do work on one line, but small enough to keep my
code readable when I have two files open side-by-side without scrolling
horizontally. It's also a good heuristic to indicate when a line is probably
getting too complicated and should be broken up.

So, instead of:

```jsx
<div class="holder-initializing" v-if="translationLoading">{{content}}</div>
```

do this:

```jsx
<div class="holder-initializing" v-if="translationLoading">
  {{content}}
</div>
```

Same goes for tag attributes.

Instead of:

```jsx
<div class="something" var="anotherThing" v-if="someCondition">My content</div>
```

Use multiple lines (and I like double-indenting these):

```jsx
<div
    class="something"
    var="anotherThing"
    v-if="someCondition">
  My Content
</div>
```


Revealing module pattern
------------------------

Another subjective style thing, but I like grouping all my module exports into a
single object at the bottom which acts as a sort of summary of what the module
is exposing to the outside world, making it easier to discern compared to having
multiple `exports` peppered throughout a large file.

For example, in client/src/api/users.js, instead of using `export` on every
function, I'd simply define each function (starting with `const`), and then at
the bottom of the file, simply have one, single, `export` which exposes an
object which includes the functions I was to export like this:

```javascript
export default {
  getAllUsers,
  postUser,
  postUsers,
  deleteUser,
  postCheckUser
};
```

This way, at a glance, I can see what this module has on tap and this acts as
self-documentation.

I know this particular module isn't that complex, but I've seen other code where
each of these functions could be hundreds of lines, themselves calling other
internal functions, and when trying to find what's being exported and what's
not, it's really hard to see. This pattern makes it really clear and obvious
imho.


When Object Attribute Name Same as Variable Assignment
------------------------------------------------------

If a variable name is the same as an object attribute label you're assigning
it to, you don't need to define its assignment.

```javascript
const thing = 'blah'
const otherThing = 'more blah'

const obj = {
  thing: thing,
  otherThing: otherThing
}

const obj2 = {
  thing,
  otherThing
}

// obj === obj2
```


Using Object.assign
-------------------

You might prefer using `Object.assign` to mutate an object over using
multiple assignment calls (maybe the syntax looks nicer to you; but maybe it
doesn't!)

I noticed a module one of my clients' was using where they were
adding/overriding a bunch of prototype functions on an object and (just as an
alternative) they could take advantage of this function in this case (if it
makes sense).

```javascript
const Obj = makeMeAnObject()

Object.assign(Obj, {
  prototype: {
    thing1: () => {},
    thing2: () => {}
  }
}
```

Maybe that's a bit more compact and taking out some repetition?


Fat Arrow Functions
-------------------

Using the fat-arrow function definition syntax, if you only have one input
parameter, you don't need to use braces. Not absolutely necessary, but I've
found I kinda like how it makes things a tiny bit cleaner when I can do it.

```javascript
const myFunc = (input) => {
}

const myFunc = input => {
}
```

And, of course, if your function is only one line, you don't need to include the curly braces `{}` to define your function as the arrow function will automatically return the value immediately to its right when there aren't any.

```javascript
const myFunc = () => myArray.map(el => el.myAttribute)

// is the same as

const myFunc = () => {
  return myArray.map((el) => {
    return el.myAttribute
  })
}
```

Remove a property from an Object without using `delete`
-------------------------------------------------------

...and mutating the original object (i.e., without side effects).

```javascript
const obj = {
 a: 1,
 b: 2,
 c: 3
}
const { a, ...notA } = obj

console.log(notA) // => { b: 2, c: 3 }
```
