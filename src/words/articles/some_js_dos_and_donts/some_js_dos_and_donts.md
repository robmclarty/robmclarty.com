---
title: Some JS Do's and Don'ts
subtitle: Some of my personal preferences that have served me well over the past couple decades.
date: 2017-09-27
banner: rubber_down_banner.jpg
thumbnail: rubber_down_thumb.jpg
tags:
  - tech
  - syntax
  - javascript
  - code
---

Do Think Critically
-------------------

My #1 piece of advice is to always be evaluating and re-evaluating what you're
doing. Just because an expert says you should do X doesn't mean that X is a
solved problem. It just means that expert does X. But what if Y works better,
especially in your own, different, circumstances? Keep your mind open to other
possibilities and always be considering them when you're making decisions about
how your code is developing. Question authority, experiment, make mistakes, and
always be trying new things. But always be thinking about how it all relates
back to what you've already done and how it can connect.

Look for other perspectives. Watch coders on youtube, read blogs, and check out
the source code for that new-fangled framework you're using. Pour all this
knowledge into your head-bucket and mix it together to form your own opinions.


Do Be Consistent
----------------

Next to critical thinking and experimentation I'd say the next most important
thing to do is *be consistent*! Regardless of your own personal beliefs, I feel
the most important thing for any project is that the project be consistent
within itself.

For example, I don't like using semi-colons (see below), but if I join a project
in-progress which already uses semi-colons, I'll adjust my code so that it
matches the project. This makes it much easier for other developers to move
around the code base and understand what they're looking at (as opposed to
multiple little fiefdoms of code which seem to be fighting with each other for
style supremacy).

If you're starting a new project, that's the time to make decisions about code
style. Once the project has begun, however, you should remain consistent. This
doesn't mean everything is set in stone, just that there should be a really
compelling reason for everyone to go back through the already-existing code and
change its style to something different (this is time consuming and potentially
error prone).


Do Ommit Semi-Colons
--------------------

Look, the ASI is a part of JS. Love it or hate it, all your code will be passing
through it and interacting with it regardless. Including semi-colons in your
code doesn't avoid it. So, I believe, why fight it? Why not embrace it? Let it
do what it does and enjoy removing a bunch of rendundant clutter from your
work!

The only time you ever *actually need* a semi-colon is when you're starting a
new line with a bracket. In that case you need to distinguish that bracket from
any commands that might have been written on the previous line that could be
combined to interpret that bracket as the beginning of a new function parameter
set or something. But starting a line with a bracket is pretty rare
(I personally never do that).


Do Composition Over Inheritance
-------------------------------

Classical inheritance is simply flawed. Stop doing it! Ever have a project where
you've carefully crafted a tight hierarchy of inheritance, say A=>B and C=>D
but later realized you need to also use stuff from Both C, D, and B, but not A?
Yeah. What usually happens is you either start contorting your code into
maniacle abstractions and complex rules, or you simply wrap everything and
create an ugly gorilla class that has all the stuff you want, plus a whole
bunch of stuff you don't need. It's inefficient, very complex (read: error
prone), and always ultimately turns into a franken-structure of abstractions
and redundancy.

The main general problem with OOP lies in a false assumption that the world can
be modeled and categorized in any sane way. Everyone loves to pick simple
examples like "Cats and Dogs are Animals" or "Squares and Circles are Shapes"
but that's about as far as it goes. For example, is a Platipus a Fish or a Bird
or a Rodent?

But there's a better way!

Just use functions!

Make generic, pure, functions that do useful things, and when you make a new
module, just pick and choose what you want. If you want to make a new function
that extends another function, just use a closure. You only use exactly what
you need, you don't need to bend over backwards to make your new code "fit"
into some kind of hierarchy

See [Fun Fun Function](https://www.youtube.com/watch?v=wfMtDGfHWpA)


Do Use const Whenever Possible
------------------------------

If you're coding in ES6+ you should stop using `var` in favor of `const` and
`let`. The general rule of thumb is: *always* use `const`, unless you
absolutely need to re-assign a new value, in which case use `let`. But keep in
mind you can change *properties* of a const, you just can't re-assign it
(i.e., use the `=` operator).

For example, if you define `const obj = {}`. You can still adjust the properties
of that object, even though it's a `const` like this: `obj.prop = something`.
You just can't *assign* a new value to the `const` like this: `obj =
somethingElse` after you've already defined it as a `const`. I've found that
most of the time you never need to use `let`.


Do Use Arrow Functions
----------------------

Arrow functions help make your code more readable by eliminating a lot of
boilerplate redundancy, especially if you're composing a function from other
functions.

```javascript
const myFunc = (param1, param2) => param3 => {
  // do stuff
}
```

VS

```javascript
function myFunc(param1, param2) {
  return function (param3) {
    // do stuff
  }
}
```

This kind of style is useful, for example, if you want to be able to partially
apply *some* of the parameters of a function that will later be completed.
Like, maybe you want a function that specifically uses `param1` and `param2`
which can later be called with `param3` once its data has finished downloading
from a remote source.

This is kind of a poor man's curry (more accurately: "partial application")
which is maybe all you need for your use-case. If you want full-blown currying,
use something like [Ramda](http://ramdajs.com/).


Do Remember Arrow Functions Automatically Return
------------------------------------------------

Arrow function `return` by default. Only if you use `{}` will it treat that as a
function definition. Otherwise it will return a value. This is useful for doing
short, compact functions like this:

```javascript
  const fullName = (firstName, lastName) => firstName + ' ' + lastName`
```

You can also return whole objects. But to do this, you need to indicate that you
are returning an object instead of defining a function. To do this you just
wrap your object in round brackets like this:

```javascript
const compositeObj = (prop1, prop2, prop3) => ({
  name: prop1,
  description: prop2,
  body: prop3
})
```

This will return an object with 3 properties, rather than define a new function.
This is, for example, what React considers a "functional component".


Do Template Syntax to Compose Strings
-------------------------------------

In ES6 there's a new "template" syntax for composing strings which is much more
legible than concatenating strings with the `+` operator. It requires you to
define your string using the backtick character `\`` and wrapping any variable
assignments within a `${ }` structure.

```javascript
const firstName = "Rob"
const lastName = "McLarty"
const fullName = `${ firstName } ${ lastName }`
```

This is much more natural to read compared to multiple concatenations because it
encloses the meaning of the string within the backticks rather than forcing
programmers to mentally join a bunch of separate strings in their head like
this:

```javascript
  const fullName = firstName + " " + lastName`
```


Do Promises Over Callbacks
--------------------------

Promises allow you to chain multiple, possibly async, actions together in a
straight line which is easy to follow compared to the "callback hell" of
multiple indents and dangling brackets.

For example:

```javascript
const makeBurger = () => {
  return getBeef()
    .then(cookBeef)
    .then(getBuns)
    .then(putBeefBetweenBuns);
};

// Make and serve burger
makeBurger().then(serve);
```

compared to:

```javascript
const makeBurger = nextStep => {
  getBeef(function (beef) {
    cookBeef(beef, function (cookedBeef) {
      getBuns(function (buns) {
        putBeefBetweenBuns(buns, beef, function(burger) {
          nextStep(burger)
        })
      })
    })
  })
}

// Make and serve burger
makeBurger(function (burger) {
  serve(burger)
})
```

---

Don't use Classes
-----------------

Classes are a bad addition to the wonderfully functional JS language. Don't use
them. The only reason they're even there is because of all the Java programmers
who started working with JS and couldn't think straight without their crutch.
Classes are simply a cosmetic tack-on which hides the true prototypal function
objects underneath. JS uses functions, objects, and prototypes. Just use those
directly for far fewer headaches. See above re. composition over inheritance.

I think you can still be "object oriented" if that's how you prefer to think
about the code's structure through collections of functions inside modules.

The cool thing about JS's modules is that they're singletons already. They're
much more flexible to act as containers of functions (and optionally some local
data/state if you want). But they help make *composition* easier while avoiding
all the literal insanity that ends up happening whenever multiple people try to
implement a custom taxonomy and category abstract concepts that don't exist as
nouns in the real world (e.g., `DataManager` or `UploadAPIParamWrapper` or
`StateWatcherTemplateInterface`). Life (and your code) are so much easier if you
just avoid all this. Through composition, just import the specific functions you
want to use and use them. Manage your data in a structured way outside of your
modules (so it's all in one place and not scattered all over the app in public
variables) and separated from the app logic.


Be Careful When Using the New Module Syntax
-------------------------------------------

Although most transpilers support the new `import`/`export` syntax, this is
still a contentious feature of the new ES6 standard which is actively being
debated and is by no means set in stone. For example, in Nodejs, most
developers prefer the existing `require` syntax over the new one. Also keep in
mind that *no* JS engine natively supports ES6 modules at this time (because of
this debate). So, I would be wary about trying to shoe-horn in this new style
given that it's status is still kind of up in the air.

That said, I do like the new syntax and use it in my own front-end apps. But
remember that `require` does all the exact same things, so you're not missing
out on anything by not using ES6 modules ;)


Don't Repeat Object Property Names if They're the Same
------------------------------------------------------

In ES6, if you're defining the properties of a JS object and assigning variables
to those properties, you don't need to define the same thing twice if the
property name === the variable name.

So, for example, say you a function which takes some parameters and ultimately
returns an object with some properties (some of those properties have the same
name as the function's parameter names). You would traditionally do something
like this:

```javascript
const makeUserProfile = (firstName, lastName, phone) => {
  const composite = `${ firstName } ${ lastName }`

  return {
    firstName: firstName,
    lastName: lastName,
    fullName: composite,
    phone: phone
  }
}
```

But if the names are the same, you can just ommit the assignment and JS will
interpret that to *imply* the above. However, if you are, actually, assigning
the value of something that is *not* the same name, you will still need to
fully define it.

```javascript
const makeUserProfile = (firstName, lastName, phone) => {
  const composite = `${ firstName } ${ lastName }`

  return {
    firstName,
    lastName,
    fullName: composite,
    phone
  }
}
```


Don't use Generators
--------------------

They're just more hassle than they're worth. They add a shit ton of complexity
to do things that can be done in other ways that aren't so difficult to
understand. IMHO, the best way to do something is the way that is easiest to
understand. This limits errors, makes code more extensible, more maintainable,
and more reusable. If you use a bunch of generator magic that reduces your
lines of code from 10 to 3, but is a mysterious collection of symbols and
machine-code that nobody can follow, bad things are bound to happen. Just don't
go down this road; it's not worth the headaches.


Don't Take my Word for It
-------------

Along the same lines of "think critically", take everyone's (including my)
advise with a grain of salt. The best thing about JS as a language is
it's *flexibility*. You can use many different styles and paradigms and
processes and javascript usually has a way to accomodate them all. Only you can
decide what's best for your project. Ultimately, choose the methodology
which *you* understand. Even though I, personally, don't like OOP or `class`
doesn't mean that it's not right for you. If you're coming from an OOP
background and don't understand all this wierd functional stuff, use what you
know.

The best way of doing something is always the way you *know*. There are no
silver bullets (and nothing is absolutely "right") in life, let alone
javascript ;)
