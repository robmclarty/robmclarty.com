---
title: Stripe VS Paypal
date: 2013-07-22
tags:
  - tech
  - review
  - payments
banner: stripe_vs_paypal_banner.jpg
---

Both Stripe and Paypal provide payment processing services to help
you accept money through your website. But in my opinion, Stripe is
easier to use and understand, simpler to setup, more flexible, and
better value for about the same price as Paypal.

The goal of your payment processing system is to offer a convenient
method for exchanging real money securely so your customers can trust
buying products from you online. Both [Paypal](https://paypal.com/)
and [Stripe](https://stripe.com/) fulfil this goal. That said, not every
payment processing service is created equal and it is my opinion that Stripe
provides a better overall value compared to Paypal. There will be initial effort
needed to adjust to a new system (if you already have integration with an existing
system, like Paypal, perhaps this is costly), but in the end I believe
time and money will be saved by Stripe over Paypal and that the switch
is worth the effort and expense.


Overview of Stripe's Benefits
-----------------------------

- process payments directly on your site without the headache of
complex payment gateways, merchant bank accounts, and PCI compliance
- secure interaction with Stripe servers keeps your customers' data safe
- seamless checkout experience within your own site means increased conversions and/or sales
- competitive pricing (in many cases cheaper)
- better analytics and reporting
- easier integration, setup, and maintenance
- great support for when you need help or something doesn't work
- backed by former [Paypal founders Peter Thiel and Elon Musk](https://www.fastcompany.com/1813087/inside-stripe-paypal-competitor-backed-paypal-founders-peter-thiel-elon-musk)
- don't get charged for refunds or disputes (see [new pricing changes](https://stripe.com/blog/a-pricing-update))


What other people are saying
----------------------------

> "Call it a coincidence but since we switched to our new payments platform
> a month ago, sales have gone up."
>
> — [CenterNetworks](http://www.centernetworks.com/stripe-from-paypal-google-checkout/)

> "'Using Stripe is almost as easy as embedding a YouTube
> video into a website,' says Mike Moritz, a venture capitalist with
> Sequoia Capital."
>
> — [Business Week](https://www.businessweek.com/articles/2012-02-23/stripe-aims-to-reinvent-e-payments)

> "Stripe has no setup fees, no monthly fees, no minimum
> charges, no validation fees, and no card storage fees. There’s also no
> charge for failed payments. You’ll never have to decipher a complex
> statement, because you know what you’re charged in advance."
>
> — [AppPulp](http://www.apppulp.com/article/stripe-vs-paypal-online-payment-disrupt/)

> "[I] realized the biggest mistake I’ve made...to-date.
> What I found was that a number of customers filled in our order form,
> went off to Paypal or Google Checkout, but never completed the
> order...Call it a coincidence but since we switched to our new payments
> platform a month ago, sales have gone up."
>
> — [CenterNetworks](http://www.centernetworks.com/stripe-from-paypal-google-checkout)


User Experience
---------------

### Paypal

- re-direct users to PayPal's website, away from yours
- users enter credit card details or log into Paypal account
- user confirms they want to allow company to bill them
- user is redirected to company site
- user gets what they paid for

### Stripe

- user enters credit card details or logs into company site
- user gets what they paid for


Setup
-----

### Paypal

![Paypal Signup Process](/images/words/articles/stripe_vs_paypal_paypal_signup_process.jpg)

Paypal's setup process is lengthy and confusing. I felt like I just
got the manual for a fusion reactor. I didn't look forward to completing it...

### Stripe

![Stripe Signup Process](/images/words/articles/stripe_vs_paypal_stripe_signup_process.jpg)

Email, password, password confirmation, done. How easy is that? It
was so fast I still retained some of my initial excitement and wanted to push
further with my app just to see what I could do with Stripe. With
Paypal, I just wished that the process would end.


Cost
----

Each has similar costs, but Paypal has a lot of fine-print extras
that Stripe doesn't have. Stripe is a simple transactional cost of
**2.9% + 30 cents** (only for successful transactions) and nothing more.

![Stripe VS Paypal Costs](/images/words/articles/stripe_vs_paypal_costs.jpg)


Support
-------

### Paypal

- makes backwards-incompatible changes that have left a lot of
  websites broken without adequately communicating the impact their change
  would make with their customers, [losing them money](https://gc-taylor.com/blog/2011/12/8/why-we-ditched-paypal-stripe/)
- calling in can be a laborious, time-consuming process, which may not actually get your problem solved
- documentation on Paypal's site is extremely confusing, often times
  out of date, and developer details (what's needed to actually make
  things happen) are usually buried under heaps of marketing material
- email can take days to get a solution to a problem
- some customers have had their accounts frozen for silly reasons

> "All three of PayPal, Google, and Amazon suck, but I will honestly say that
> PayPal is probably the worst developer experience I've had in that same time
> period. And this was for a very simple implementation of a single product
> one-time purchase.
>
> 1. It took hours to figure out what product I wanted. PayPal's product
>   assortment is a trainwreck. What the hell is the difference between Web
>   Payments and Web Payments Pro and Adaptive Payments and about a dozen
>   other things with idiotic names that all sound the same. The chart that
>   tries to help you pick a product is useless.
> 2. The layout of paypal's website is labyrinthine. Even after I figured
>   out what product I needed, assembling all the relevant documentation was hard.
> 3. The documentation is flat-out wrong in several (rather important) places.
>   For example, the [IPN guide](https://cms.paypal.com/cms_content/GB/en_GB/files/developer/IPNGuide.pdf)
>   (naturally, a PDF) on page 9 clearly states that you must explicitly
>   post back messages to paypal to get them to stop sending (which is
>   [stupid] and screws up transactions), but HN says that this is not the
>   case. You can see my venting about this almost a year ago [here](http://news.ycombinator.com/item?id=2341119).
> 4. Posting a technical question to PayPal's forum gave me an unhelpful
>   response from a clearly first-level "read the flowchart" technical
>   support rep. Pointless exercise.
> 5. PayPal's APIs all feel like they were designed in the 1990s.
>   Seriously, I would be horribly embarrassed to publish an API like that. I
>   put more thought into (and produce better documentation for) my
>   opensource projects. Useless crap websites like Foursquare can come up
>   with solid APIs, there's no excuse for a company that handles actual
>   money to be this janky."
>
> — [stickfigure](http://news.ycombinator.com/item?id=3331556)

### Stripe

- interact through twitter, email, chat, or phone
- chatroom with real developers and business staff you can talk to directly
- they talk with you until your problem is solved and your technology is *working*

> "When a customer of ours had an issue placing his order, I
> wrote Stripe to see if they could offer any insight as to what errors
> they might be seeing on their end. While the error was unrelated to
> Stripe itself, they were so awesome that they actually took the
> initiative to browse through our checkout page and point out the spot
> that they thought to be the issue. A company that stands beside you when
> debugging your checkout page, maintaining swift response times on an
> issue that isn't even theirs? That's customer support."
>
> — [michaelschade](http://news.ycombinator.com/item?id=3331556)


API
---

### Paypal

- cryptic
- badly documented
- non-standard interface

### Stripe

- library integration with every major web programming language (curl, ruby,
  python, php, java, C#, [and more](https://stripe.com/docs/libraries))
- javascript makes embedding functionality directly into your website as easy as copy and paste
- rich fully documented [reference online](https://stripe.com/docs)


Interface and Analytics
-----------------------

![Stripe VS Paypal Dashboards](stripe_vs_paypal_dashboards.jpg)

I'd hardly even call what Paypal has an interface. It's just a bunch
of tables of text that don't make a lot of sense. Stripe, on the other
hand, shows beautiful graphs and charts and makes the data
comprehensible and clear.


Use Stripe next time you need online payments
---------------------------------------------

Stripe is hands-down the way to go for payment processing online, in
my humble opinion. When I tweeted that they launched in Canada they even
sent me a free t-shirt! Do you think Paypal even cares that you exist?
But the bottom line is that Stripe will save you money, give you less
hassle (even make you feel good inside), and show you a clear picture of
*your* bottom line.

*NOTE: I'm not affiliated with Stripe nor am I benefiting from
recommending them in any way. I just think they're what I've been
waiting for for years and maybe they're what you've been looking for
too.*
