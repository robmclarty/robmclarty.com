---
title: The Business of Privacy
date: 2018-10-05
banner: skis_banner.jpg
thumbnail: skis_thumb.jpg
tags:
  - tech
  - security
  - privacy
  - process
---

As a business developing tools and services for companies who deal with personal
data, I believe it is important for us both ethically and commercially to be
sensitive to the security of other peoples' data; especially when they, as
users of the systems we help to create, often times are not even aware of how
their data is flowing through the network.

Taking more concrete steps to be sensitive to this vulnerable information is not
only a nice-to-have, it's an essential part of our business. Along with the
nice cozy feeling of being able to sleep at night knowing we've stood up and
protected peoples' data and respected their privacy, we can also gain access to
new opportunities: being able to offer new features and services that customers
are asking for, compete at a higher level of business (especially in the
enterprise, where slower companies aren't able to keep up with the demand for
better locks and keys), protect ourselves from potential liability. We all want
control of our own data, transparent and easy-to-verify technical mechanisms,
and protection from bad actors.

What we don't want is to add a lot of expense, and red-tape, and complexity that
simply qualifies us for a special gold star sticker, but doesn't go toward
imporiving anyone's actual privacy or security. Gold stars aren't important.
Actual privacy and security is important.

Privacy and Security are not mutually exclusive either. "Tyranny, whether it
arises under threat of foreign physical attack or under constant domestic
authoritative scrutiny, is still tyranny. Liberty requires security without
intrusion, security plus privacy. Widespread police surveillance is the very
definition of a police state. And that's why we should champion privacy even
when we have nothing to hide." (Schneier 2006)

And it's not just the government, or the police, but the criminals, the
terrorists, or maybe just a spouse, a bully, or a friend. Sometimes these
parties are defined differently depending on where you sit in the power
structure of the world. For example, in Egypt, you can be arrested and jailed
as a terrorist by simply visiting a website not approved by the government. In
Canada, we might reverse the labels of the two parties involved. Regardless, as
costodians of users' data, it should be a core tennant of our activities to
respect our users and protect their data from whomever may not have their best
interests at heart. In so doing, we may build trust in our systems, and thereby
be able to sell more of those systems ;)


Places Where Privacy/Security Could Be Better Integrated
--------------------------------------------------------

### Discovery

Bring up these issues at the very beginning and make it a part of the story.
Estimate, plan, and architect based on project requirements, client needs, and
our own ethical considerations when handling users' data.

### Definition

Part of defining the project's deliverables and expectations should include
security and privacy. Enhanced security/privacy should also be defined for
projects dealing with more sensitive information(e.g., health or financial
data) and the project should be built around that. For example, a health app
may require end-to-end encrypted communications such that only a patient and
her doctor have access to the data. This has very big implications for
implementation strategies and development pathways, thus should be identified
and defined up front.

### Data-architecture

When designing the application itself, *how* data is handled should play as
important a role as *what* is done with that data. Special attention should be
payed to potential attack vectors (e.g., follow how data travels through the
whole system, when it is in motion, when it is at rest, etc.). Just because
it's stored in the database doesn't mean it is safe (is the database accessible
from the open internet?).

### QA

When verifying that an application is working or not, part of this should
involve that it is securing data properly and not leaking information to
unauthorized parties. This could be both a combination of business logic
(e.g., access permissions) as well as security thresholds(e.g., encryption
algorithms, security protocols, etc.) NOTE: This should *not* simply be
following a standard checklist or relegated to a 3rd party "stamp of approval"
as every application is unique with its own privacy/security requirements
implemented in a project-specific architecture which require the QA process to
be aware of the application's special requirements and test those, rather than
a "catch-all" test which doesn't take an application's unique
features/challenges/requirements into account.

### Communication

We should do more to ensure that data is secured by improving how we share
information, even internally (e.g., do not share passwords, certificates, or
secrets on insecure channels like slack, skype, or email... instead use an e2e
encrypted channel such as Signal, Protonmail, or GPG (or in-person/physical).


Key Concepts When Thinking About Privacy and Security
-----------------------------------------------------

### Respect

Respect users' data as you would respect them as human beings(would you sell
another human being to a 3rd party and also ignore the consequences? then don't
sell humans' data to 3rd parties, nor conveniently look the other way with what
happens to it).

### Need-to-Know

If you don't need to know, don't (attack surface can be greatly reduced by
simply not including data that is unnecessary in the first place). Keep access
to data to a minimum (only store and manipulate what's absolutely necessary for
the system we're creating).

### Threat Model

Be paranoid and assume the network is hostile, that there are hidden CCTV
cameras recording you enter your PIN, that every personal detail about you
(even your birthday!) can be discovered by attackers, and that your advessary
has near unlimited compute + memory capacity (that is, develop your threat
model, and adapt it to different situations: like maybe you balance convenience
with security differently when you're setting up your DVD player compared to
when you're taking money out of your bank account)

### Onions

Think of security from the outside in; there are multiple layers(e.g., maybe no
one has SSH access to your EC2 instance, but you left your AWS credentials on a
piece of paper on your desk... now you must assume that anyone with access to
your desk now has access to not only your EC2 instance, but EVERYTHING no your
AWS account! Security is made up of multiple layers, each of which can be a
weak point in the system).

### Trust

Breaches of confidentiality are breaches of trust. iIn business, the first time
trust has been broken, is usually the last time (to maintain trust, and thereby
maximize profit, users' privacy must be respected; that is, it must be
secure!)

### Don't DIY

Don't roll your own crypto unless you've got a PhD in math and algorithms
(and even then, it's probably not a good idea). Don't think you can do a better
job than an established, tested, and upgraded crypto mechanism. It's hard
enough simply implementing a protocol, let alone doing cryptanalysis. Always
use standard libraries for actual cryptography. Also, "crypto"
means "cryptography" not "bitcoin" ;)

### Ethics

Just because you *can* sell user data to a 3rd party, does that mean you should?
Privacy and security are necessarily related to ethics and requires businesses
to dig deep and question their core beliefs about who they are and what they
stand for. If you stand for not being a dick, maybe make efforts to *protect*
user data rather than profitting from it (or at the very least, ask users if
it's ok with them first)

### Protection

Software should be built as if constructing a fortress: it should be easy to
access for authorized users, but it should be hardened and resiliant to bad
actors sieging the walls.

### Encrypt All the Things

Ideally end-to-end, but think about how data is being passed around through the
wires and stored in data centers and lock it down whenever possible so only
users themselves have access to their data.

### Choose Wisely

When picking a tool or 3rd party service, think about the privacy and security
implications of that choice and weigh it against alternatives (e.g., Google
Anlaytics VS Pwik; perhaps a situation of usability VS privacy). ANY time you
use a 3rd party service whether for analytics, ML, accounting, or project
management, assume all the data you put in is being read by the company that
runs the service, and that it has the potential to leak. Are you still ok with
putting your data in there?

### Limit Dependencies

When using other libraries/modules in development, using online services like
Google Docs, or creating a development database based on customer data, the
fewer external dependencies we have to do what we do, the fewer chances we have
of leaking important data or compromising the security of the systems we build
(e.g., Google Docs is definitely convenient, but are we ok with, and aware
that, all the customer data we put into our spreadsheets is now seen, stored,
backed up, and analyzed by another for-profit corporation?)


Basic Web App Security Checklist
--------------------------------

- close all unnecessary ports on web servers
- properly secure SSH connections (e.g., using public keys)
- hide back-end services from internet (e.g., database, file storage, etc.)
- never serve files off the web server's file system
- serve user-generated content from a different domain entirely
- avoid SQL injections by properly using an ORM or query-builder
- avoid cross-site scripting (XSS) by using an HTML template lib
- hash and salt your users' passwords (never store plain txt passwords)
- require your users to create minimum strong passwords (e.g., at least 10
  chars + check against dictionary of common passwords)
- always serve web resources over TLS (Letsencrypt is free)
- don't use cookies for session storage
- don't allow open redirects
- use CSRF tokens on important form submissions (or use s different auth scheme
  like `cred` to avoid this issue altogether)


Some Ongoing Projects I'm Working on to Help with Security/Privacy
------------------------------------------------------------------

- [Personal Security Tips](https://github.com/robmclarty/personal-security-tips):
  Personal info/op-sec tips and considerations in the age of mass surveillance.
- [Cred](https://github.com/robmclarty/cred): JWT authentication & authorization
  for distributed express APIs.
- [Cred Server](https://github.com/robmclarty/cred-server): Nodejs Express IdM
  system for managing user permissions across multiple resources using `cred`
  JSON web token protocol.
- [Nginx Config](https://github.com/robmclarty/nginx-config): Sensible nginx
  config for using SSL/TLS and reverse proxy.
- [Soko](https://github.com/robmclarty/soko): A toolbox of cli tools for
  building and running javascript applications.
- [Discloser](https://github.com/robmclarty/discloser):  Electron app for
  submitting text to someone anonymously, e2e encrypted, via a corresponding
  zero-knowledge cloud server.
- [Discloser Server](https://github.com/robmclarty/discloser-server): Cloud API
  for accepting Discloser messages and publishing a public key to be used for
  encryption.


References
----------

- [Electronic Frontier Foundation](https://www.eff.org/wp/osp)
- [Harvard Business Review](https://hbr.org/2014/04/privacy-is-a-business-opportunity)
- [Michael Geist](http://www.michaelgeist.ca/)
- [The "Hidden Cost" of Privacy](https://www.schneier.com/blog/archives/2009/06/the_hidden_cost.html)
- [The Eternal Value of Privacy](https://www.schneier.com/essays/archives/2006/05/the_eternal_value_of.html)
- [The Importance of Strong Encryption to Security](https://www.schneier.com/blog/archives/2016/02/the_importance_.html)
- [Privacy](https://www.eff.org/issues/privacy)
- [Startup Security Guide: Minimum Vialbe Security Checklist for a Cloud-Based Web Application](https://blog.hartleybrody.com/startup-security/)
- [How to Secure Your Web App Using HTTPS with Letsencrypt](http://robmclarty.com/blog/how-to-secure-your-web-app-using-https-with-letsencrypt)
- [What is a JSON Web Token?](http://robmclarty.com/blog/what-is-a-json-web-token)
