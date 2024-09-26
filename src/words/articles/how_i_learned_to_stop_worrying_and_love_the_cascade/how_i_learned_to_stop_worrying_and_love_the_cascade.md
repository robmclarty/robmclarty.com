---
title: How I Learned to Stop Worrying and Love the Cascade
subtitle: Some of my thoughts about best practices for maintainable CSS used to style HTML.
date: 2017-09-27
banner: farm_flowers_banner.jpg
thumbnail: farm_flowers_thumb.jpg
tags:
  - tech
  - syntax
  - css
  - code
---

I think, in general, the implementation of graphic designs in CSS can be made a
lot less complex. Here is (at least what I believe is) a simpler approach to
managing it.  CSS is definitely a step up from `<font>` and `<table>` designs,
and is one of the most-used "languages" that exist; mainly because of its
declarative simplicity. Anyone can sit down, having never seen it before, and
start making changes and be productive in minutes. That's a seriously big deal.
CSS is awesome that way. But CSS doesn't need to be a full-blown programming
language either. It has a lot of great features built-in. Rather than fighting
it, I think we should all learn how to embrace the cascade!


Web != Print
------------

I'm a full-stack developer/designer by trade, so when I start a new project I'm
not usually thinking about CSS right off the bat, but I must confess: applying
styles and implementing a graphic design in CSS is the part of any project that
I look forward to the most. I personally find it the most relaxing,
straight-forward, and impactful (from an observing user's point of view)
part the the process. It's where the app has life breathed into it; when it
starts *looking* like something. You first see an app's magic happen here.

I've talked to a lot of devs and they think I'm crazy. They say things like "Why
doesn't CSS have programming feature X? Why are all these styles overriding
other styles? How are you supposed to get anything done? Why can't I OOP this
shit up?". I think a lot of this sense of dread comes from a misunderstanding
from both designers and developers. I see designers harassing developers for
pixel-precision to match their fabulous designs and I see developers cutting
corners in markup, wrapping each and every part of a UI in useless `<div>`s just
to namespace a little section so they can clobber all the other styles being
cascaded down the hierarchy.

I think everyone involved just needs to step back, take a deep breath, and
accept the cold hard fact that when it comes to *web* designs, *flexibility* is
the name of the game, not pixel-perfection. You have to know that your design is
going to shift and change slightly on slightly different systems, on different
resolutions, and in different lighting conditions. You have to create with this
in mind. I know we're over 20 years in, but it seems like it still needs to be
said: the web is *not* print!


Only Say What Needs to Be Said
------------------------------

The most perplexing thing I see when I look at other people's CSS isn't even the
CSS itself, but the markup that it's trying to style. "Semantic" means: it
*means* something. The whole point of HTML is to mark up content to give it
context and meaning so that when computers look at it, they see a nicely
structured and meaningful collection of concepts. Markup should only be
introduced if it adds meaning, clarity, specificity, and/or definition to the
*content*. You should never be adding it for the sake of styling per se
(although during the process of styling content, you may discover some
ill-defined areas of your markup which could use some extra separation). It is
the meaning--the semantics--that you are expanding upon, not the styling.

As you might imagine, my own opinion on CSS involves an absolute *minimum* of
markup (only use what you absolutely need to express the meaning of the
content). Similarly, I also believe in short, concise, well-expressed class
names (I have the exact same opinion about variable names in general) such that
in looking at the raw markup, even a lay person could make well informed
judgements regarding the purpose of those words (e.g., just call a class
"signup-form" rather than "form form__signup--new" or "column-2 grid-4 span-half
sidebar"). I believe in
[DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself) and
[KISS](https://en.wikipedia.org/wiki/KISS_principle), and I believe in
minimalism in general (if you can express the same thing with fewer words,
without losing meaning, I think the shorter method is always better).

As a general rule, I feel that UI should never take center stage in an app. It
should always sit back and be as invisible as possible, only presenting itself
*when needed* to empower users to solve their problems (now, this might mean
having a button always displayed regardless of app state if that's what's
needed, but as a rule: UI designs should, imho, always strive to introduce as
little UI as possible, step back, and let the user *use* the app, focusing on
content). I think common sense will always win the day. As a result, I'm not
really a big fan of things like BEM or Bootstrap or PostCSS or what-have-you.
When it comes down to it, CSS is pretty darned good at solving visual web
presentations on its own.


Take All This With A Grain of Salt
----------------------------------

Organizing large application styles can be daunting and requires a bit of
forethought so you don't get lost in a tangled web of overriding overrides that
are all `!important`. The architecture I'll lay out here will be, I hope, a
guide that can help you organize your styles by meaning.

Before I get started, I should mention that I don't use plain vanilla CSS (I
like SASS; and LESS is pretty much the same thing). There are certain annoyances
such as vendor prefixes, no modularity, and lack of variables which make certain
details more difficult when using vanilla CSS. That said, the SASS I make is
very minimal. I use the SCSS syntax (which is pretty much vanilla CSS) and only
make use of variables and @import (and maybe a convenience method from time to
time, such as darken() or lighten()). This just helps me structure my code and
stay DRY, that's all. I don't go crazy with mixins or creating a convoluted OOP
hierarchical taxonomy or anything (fyi, don't do that), so I think it's really
pretty simple and easy to understand.

I don't mean to say that the structure I'm defining here is the be-all and
end-all of CSS organization, nor should it be followed to the letter. I just
find this structure makes a lot of sense to me. It feels natural and organic; it
can adapt to changing circumstances and meet oncoming challenges. Maybe it
can help you too. I'm constantly re-evaluating how I work and revising how I do
things. You should too. Always be thinking! Take this as a starting point, but
adapt it to the way you work. If you have some good ideas, let me know!


High Level Categories
---------------------

Let's start with folder structure. I like to create a folder called "styles" in
the root of my project from which I can make use of build tools (like with Gulp,
Grunt, Webpack, or whatnot) to pull in my SASS and output the resulting vanilla
CSS to another build folder for use in production.

Inside this base folder, I then create one or more app-specific folders. For
example, for a particular web app, I may have a folder for "client" (perhaps a
public-facing SPA), "admin" (a different, locked-down SPA used only by
administrators), and maybe another one called "marketing" which is a separate
set of styles for the static marketing website which promotes my "client" app.
These are the highest-level buckets, grouping styles into logical sub-apps which
are all related in a single project. Inside each of these high-level buckets I
use the same repeated structure to organize per-app styles.

Inside each app folder I then create an `index.scss` file which acts as the root
for each app's stylesheet. This file does nothing more than import all the other
styles in the order in which they should cascade. This file gives you a broad
overview of the app styles and makes it easy to re-order things to help with
cascades and overrides (e.g., you might use a default app-wide style at the top
of the file which is overridden by more specific component styles further down).

An example index file might look like this:

```scss
@import "vendors/normalize";
@import "vendors/ionicons";

@import "helpers/colors";
@import "helpers/measurements";

@import "core/defaults";
@import "core/layout";
@import "core/fonts";
@import "core/shared";

@import "components/header";
@import "components/page";
@import "components/forms";
@import "components/flash";
@import "components/chat";

@import "animations/spinner";
@import "animations/progress-bar";
@import "animations/slide-down";
```

As you can see, the styles are broken down into logical buckets which can easily
be arranged as you see fit simply by editing this file. The things that are
imported closer to the top will be overridden by things that are imported closer
to the bottom. I should also mention that in SASS, any variable that is imported
before another file will make that variable available in that other file. This
way you only need to import those variables once, here, and then just use them
in all your other files ;)


Folder Structure
----------------

Along side the base `index.scss` I then include a standard set of folders which
I use for each and every app/stylesheet I want to create. It looks something
like this (here, I'm only showing the `admin` stylesheet, but the same things
would be done for each stylesheet inside `client` and `marketing` too):

```
styles\
  admin\
    animations\
    components\
    core\
    helpers\
    vendors\
    index.scss
  client\
  marketing\
```

This is the basic structure. There is a `styles` folder which has one or more
children, each of which represents a single stylesheet (for example, per
app/website/section). Each of these folders uses a standard internal structure
to help organize the different parts of each stylesheet, each containing a main
`index.scss` file which will be compiled down to a single vanilla CSS file by
your build tasks (however you want to do that).

As you can see, the names of these internal folders are fairly self-explanatory.
I start with a `core` folder which includes any global or shared styles which
will apply to the stylesheet as a whole (e.g., defining the base font, the size
of headers, and the general, broad-strokes of the layout. I then make use of
some `helpers` which include re-useable variables for things like color
palettes, grid measurements, and fonts. Next to that is  `vendors` which
contains 3rd-party CSS which I might use like resets, icon sets, etc. Most of
the work will likely be done in the `components` folder which contains separate
`.scss` files for each logical "component" in the UI (e.g., things like
"header", "lists", "forms", and more specific widgets like "switch",
"suggestion-input", or "signup-button"). The idea is to group styles by logical
components or problem domains; little pieces of the UI that group a bunch of
markup into a nameable category. I don't have any hard-set rule on how to divide
things up, but it's like anything in programming when you're trying to name
variables and segregate modules. I don't think it's possible to define some
universal rule on how to do it. Just use common sense. Lastly, there's the
`animations` folder, which I keep separate because I find CSS animations can get
pretty big and verbose, so I like grouping those into their own files (e.g.,
"loading-spinner", "progress-bar", "page-flip", etc.) Each file in this folder
would correspond to a single animation which could be applied to an element with
a class name.

This is what a fully populated `admin` stylesheet folder might look like:

```
admin\
  animations\
    spinner.scss
    progress-bar.scss
    slide-down.scss
  components\
    header.scss
    lists.scss
    switcher.scss
    buttons.scss
  core\
    defaults.scss
    fonts.scss
    layout.scss
    shared.scss
  helpers\
    colors.scss
    fonts.scss
    measurements.scss
  vendors\
    ionicons.css
    normalize.scss
  index.scss
```


Core
----

It's worth talking a bit more about the `core` folder specifically because the
files in here are always the same. These are meant to be global styles which
would cascade down through all the others; things that would always apply except
in very special circumstances.


### `defaults.scss`

This is usually the first thing to be loaded by index.scss (after any resets and
whatnot). In this file I try to only define base HTML tag styles (that is, no
classes are defined here). These are styles that apply app-wide which define the
core essence of the app/stylesheet. I might include things like applying
`box-sizing: border-box` to all elements, or define the `font-size` and
`line-height` for the `<html>` and/or `<body>` tags (which would cascade down to
all children unless overridden specifically). This, thus, also defines the size
of an `em` or `rem` which will be used for layout purposes deeper down. I
usually define a set of header tag sizes here for `<h1>`, `<h2>`, `<h3>` etc. so
that they are always consistent. I'll define the `<a>` tag's style to
standardize all links. I'll define how `<b>`/`<strong>` and `<i>`/`<em>` will
look (e.g., I might use an actual italic font rather than a browser's fake
italicize function). I might set some basic `<button>` styles (like remove the
default 3d shadow stuff), I might do the same thing for `<input>` and
`<textarea>` as well. The point is, define your root, app-wide, generic styles
here. Think of this file as an app-specific reset which sets up all your
subsequent styles so they start off on the right foot.


### `layout.scss`

I like using this file to store the broad strokes of my layout. The stuff that
doesn't change. But I don't apply any "decorations" here, only layout styles
(i.e., no colors, fonts, or borders; only `display`, `position`, `overflow`,
`padding`, and `margin` for the main parent containers of the UI). I find this
helps me "see" the structure of the app's layout at a glance which makes it
easier to later make adjustments for things like responsiveness. So, for a
classic layout like this:

```
==========================================
|                 header                 |
==========================================
|                   nav                  |
|----------------------------------------|
|                              |         |
|                              |         |
|                              |         |
|           content            | sidebar |
|                              |         |
|                              |         |
|                              |         |
|                              |         |
==========================================
|                 footer                 |
==========================================

```

I might define each of these sections in the `layouts.scss` file where I simply
apply styles like `display: flex` and `flex-direction: row` etc. which simply
place each of these containers in the locations of the viewport that I desire in
order to structure this general layout. I won't define smaller widget layouts
here, only the broad-strokes which apply to the app-as-a-whole.

```html
<body class="my-app">
  <header></header>
  <main>
    <section class="content"></section>
    <nav></nav>
    <aside></aside>
  </main>
  <footer></footer>
</body>
```

```scss
.my-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & > header {
  }

  main {
    display: flex;
    flex: 1;

    .content {
      flex: 1;
    }

    & > nav,
    & > aside {
      flex: 0 0 12em;
    }

    & > nav {
      order: -1;
    }
  }

  & > footer {
  }
}
```


### `shared.scss`

I put a file in here called "shared" just as a placeholder for any re-usable,
high-level classes I might want to use in my app that don't necessarily belong
to any individual component, or for which I may want to override with
component-specific versions of the same class. Things like "button" or "divider"
or "disabled". To be honest, I don't use this file that much as most of these
things make more sense to me as their own "components" anyway (e.g., I'll make a
`buttons.scss` file in the `components/` folder for buttons and import that
above all other components which contain all button-related classes and styles).
But I find this file handy as a placeholder while I'm developing, while I
haven't fully fleshed out what my style structures are yet. So I might make a
little `.button` class in here, first, and later expand that into a full-fledge
component file.


### `fonts.scss`

This is just a place to put all of my `@font-face` definitions. These are
usually pretty verbose and deserve their own file to contain them all. Also, by
placing them in a high-level file, here, they can be imported, in order, above
all other components in the `index.scss` file.


Keep It Simple, Stupid (KISS)
----------------------

I find that in most circumstances there really isn't even a need to create a new
CSS class where a plain HTML tag name can be used. I think devs should really
take more advantage of what's already there. HTML has great semantics you can
latch your styles onto right out of the box. Don't over-think things!

For example, rather than doing this:

```html
<div class="my-component">
  <div class="my-list">
    <ul>
      <li>
        <div class="my-list-item"></div>
      </li>
    </ul>
  </div>
</div>
```

```scss
.my-component {
  .my-list {
    .my-list-item {
    }
  }
}
```

just use what God gave you:

```html
<div class="my-component">
  <ul>
    <li></li>
  </ul>
</div>
```

```scss
.my-component {
  & > ul {
    & > li {
    }
  }
}
```

Take advantage of the semantics that are already there! Use newer tags like
`<main>` and  `<aside>` rather than `<div class="main-content">` or `<div
class="sidebar">`. Use combinators like `>`, `+`, and `~` to create specificity
without adding more crufty classes (think hard before you create a new class).
While you're at it, use attribute selectors like `input[type="checkbox"]` and
pseudo-classes like `:last-child`, `:focus`, and `:checked` too. Stop using
`float` and `table`; use flexbox (anyone using IE9 should have their internet
license revoked). Don't use `px` for measuring things (unless you have a good
reason); use `em` or `rem` based off a standard grid size. Use `box-sizing:
border-box` because anything else just doesn't make sense (at least to me).
Think about how your design will resize with the viewport (this isn't static
print!). Be careful not to nest things too deep in your SASS/LESS (it's really
easy to forget about it; define things from the root as much as possible). Don't
use `!important`; if you're using it, you're probably doing something wrong
(there are exceptions, but in general it's bad form). Try to use the same
measurements to position things (e.g., use a grid of, say, 4 pixels and base all
your measurements off that such that elements are positioned in multiples of 4
pixels). A good design should have a well-defined grid which should make the CSS
a no-brainer. If you find yourself shoving stuff around by 1px increments using
floats and absolute positions, this might be an indication that the design needs
revision, not your CSS ;)


The Web is Fuzzy; Design for Flexibility
----------------------------------------

I'd like to yell at all you graphic designers out there for not understanding
how the web works. I see poor developers being told to push things, one pixel at
a time, spending hours and hours revising minuscule little things just to force
a website to conform to the designer's internal sense of what's "right". Look:
shit's gonna move around and be slightly different on different platforms. Know
this going in, and work with it, not against it. Stop wasting time trying to
turn the web into print and let developers actually make stuff *work* instead of
churning on CSS that nobody will likely notice because there's so many other
inconsistencies in your design already.

Don't get me wrong, I absolutely *love* good design and I truly believe it's one
of the most important aspects of any good app: it's the part people touch and
feel and love. But it's not more important than an app that actually *does*
something. I don't care how great it looks if it's broken! Balance and
flexibility are key. Trade off pixel-precision for minimizing bugs.

Talk to your developers and listen to them; they know stuff. Also, learn CSS
yourself and push pixels 'til your heart's content. Ultimately, the final CSS
should be an iterative process of trial and adaptation which transforms your
*ideal* design into the *real* design based on a healthy back-and-forth between
graphic design and CSS implementation. Your job is to define this ideal, not to
enforce strict adherence. Work together to discover the best way of representing
the solutions to *UX problems* through visual communication in the web medium;
this means actually using the medium of the *web*, not InDesign.


References
----------

- [HTML5 Rocks](https://www.html5rocks.com/en/)
- [A Guide to All HTML5 Elements and Attributes](http://htmlreference.io/)
- [normalize.css](https://necolas.github.io/normalize.css/)
- [Semantic Markup](http://html5doctor.com/lets-talk-about-semantics/)
- [KISS](https://en.wikipedia.org/wiki/KISS_principle)
