---
title: Reduce Complexity, Not (Necessarily) Code
subtitle: The overall goal should be to minimize *complexity* of code (for the humans that maintain it).
date: 2018-07-10
banner: city_deer_banner.jpg
thumbnail: city_deer_thumb.jpg
tags:
  - tech
  - javascript
  - process
---

Sometimes it's better to break up a complex piece of code into smaller chunks,
and save those chunks in new variables (preferably using names that describe
what they mean). Although these types of variables are not *necessary* per se,
they add clarity for the programmer looking at the code through
self-documentation and break complexity up into simple parts that a human could
hold in their short-term working memory. The value of this is that programmers
can understand more intuitively what the code is actually doing, but it also
provides logical chunks of functionality that can be further manipulated,
altered, and adjusted when new features are added or old code is being
maintained.

For example, instead of doing something like this:

```javascript
var User = require('../models/User');

function init (input, next) {
  var name = input.x,
      desc = input.y,
      email;

  if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.z)) {
    email = input.z;

    User.create({
      name: name,
      description: desc,
      email: email
    }).then(function (user) {
      user.lastLogin = new Date();

      return user.update({ last_login = lastLogin }).then(function (user) { 
        function createAuthenticationTokenForNewUser() {
          var token = User.validate(user.name).getToken();
          return token
  }
        return createAuthenticationTokenForNewUser();  }).then(function (token) { return next(token); });
    });
  } else {
    return next(new Error('Not a valid email'));
}
```

Store complex pieces in their own variables with descriptive names that helps
enable higher-order complexity with greater simplicity (if that makes sense).
That is, in this example, I've tied a chain of promises together in a series of
one-line commands (making use of functions and values defined in variables)
which help this chain read more as a paragraph of prose than a jumble of
deep-nested callbacks and return values.

```javascript
const User = require('../models/User')

// The regex which defines a valid email address.
const isValidEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Return a promise to validate an email address.
const validateEmail = email => new Promise((resolve, reject) => {
  return isValidEmail.test(email) ? resolve() : reject('Invalid email format')
})

// Update the last login timestamp on the user instance with the current datetime.
const updateLastLogin = user => user.update({
  last_login: Date.now()
})

// Return auth token if valid user name, otherwise throw 403 error.
const makeToken = user => User.validate(user.name).getToken()

// Given a new name, description, and email, create a new user instance and immediately 
// login as that user, returning a valid authentication token. Otherwise return an error.
const registerUser = ({
  name, 
  description, 
  email
}, next) => validateEmail()
  .then(() => User.create({
    name,
    description,
    email
  }))
  .then(user => updateLastLogin(user))
  .then(user => makeToken(user))
  .then(token => next(token))
  .catch(err => next(new Error(err)))
```

---

A little tip on the subject of variable naming I encountered myself whilst
refactoring recently:

I was recently dealing with some vars named `appCharacteristic`,
`appCharacteristics`, and `appCharacteristicSelector`. 

While normally I would recommend a more descriptive label over a short-form one
(e.g., don't name things `x`, `cb`, or `obj` unless it's really really obvious,
like you're using Node's filesystem module and call it `fs`), in this case it
actually becomes more legible to shorten things up in order to see the
differences (e.g., `appChar`, `appChars`, and `appCharSelector`). 

More bugs can be squashed the easier the code is to read (by humans).

**Write code for humans first, machines second.**
