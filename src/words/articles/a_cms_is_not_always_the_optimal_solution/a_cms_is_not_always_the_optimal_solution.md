---
title: A CMS Is Not Always the Optimal Solution
date: 2013-06-15
banner: smorgasbord_banner.jpg
thumbnail: smorgasbord_thumb.jpg
tags:
  - process
  - business
  - tech
---

The method you use to add changes to your website really depends on the
complexity of what you want to add. Some kinds of changes are frequent, follow
a similar structure, and contain mostly simple formatting like text, images,
and embedded media. Other kinds of changes involve novel dynamic interactivity
or are unique parts of your website that only occur once. When you decide to
implement a content management system, to help you make changes as quickly and
efficiently as possible, remember these two categories and only implement CMS
controls for the former type of changes.

This that should be handled by your CMS (handled by non-technical users):

- frequent updates (e.g., blog posts, news feeds, calendar events, newsletters, forum posts)
- time-dependant content (e.g., featured or promotional announcements)
- fluctuating data (e.g., product pricing)
- structurally consistent content (e.g., products, news releases, informational 'pages')

Things that should *not* be handled by your CMS (handled by an expert who knows
how to modify the programming "under the hood"):

- custom or unique content (e.g., homepage widgets, brochure pages with unique one-off designs, landing pages)
- content that doesn't change often (e.g,. footers, headers, homepage, contact page)
- complex interactive components (e.g., ui, payment processing, games, widgets)
- data-driven content (e.g., tables, graphs, charts, etc.)

The reasons for dividing the maintenance of a client's website like this are
mainly to do with cost/effort versus value. For the features that fall under
the "not maintained through CMS" the value the client gets out of being able to
edit those features is out of proportion to the costs and effort involved in
constructing the ability to do those edits. It would be more cost effective
(and more robust both design and development-wise) to have an expert hand-make
those features.

For example, adding a twitter feed to your homepage might take a day or two for
a developer to hard-code into the HTML of the page, whereas it might take a
couple weeks to develop the CMS controls for the client (non-expert) to edit
him/herself. Conversely, while it might take a week to develop a blogging
system, it would take the client less than a day to make a new blog post.
Whereas it might take multiple days for a developer to hand-code each new blog
post, update index pages, pagination, etc. The savings of money and effort over
dozens of blog posts makes it obvious that the investment in CMS controls is
worth it in the case that structured content is frequently updated quickly.

I remember back when there were no CMSs and you *always* had to hand-code new
content. Time can be saved by letting computers handle repetitive work, but
changes need to be balanced against the alternatives. To add new functionality
your dev is going to need to modify the database structure, add new API routes,
handle errors, build new user interface elements, listen for user events,
direct data to the backend and ensure it got there as expected, make all that
intuitive for non-technical users, and test everything to make sure it works.
If all that can be avoided, the dev just needs to type some text into a file
and upload it to the server.

The web is constantly in flux, always changing, and always evolving. Your
website should too. I don't think you should expect to pay a developer to make
your website and ever really be "done". You should have a conversation about
the long-term maintainability of your website and how you will handle technical
changes over the course of its life. You want to be able to call upon an expert
and say "add this to the site" when something is needed. I know nobody likes to
have external dependencies and wants full control over their stuff, but some
things should be handled by professionals. The work is a lot easier for a pro
to do and a lot cheaper for you compared to constructing complex custom CMS
controls for everything. It's my opinion that not *everything* should be
handled by your CMS (but some stuff definitely should be).
