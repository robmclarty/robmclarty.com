---
title: Personal Security Tips
subtitle: Some general-purpose tips for keeping your personal data safe in the age of mass-surveillance.
date: 2017-05-09
banner: totem_single_banner.jpg
thumbnail: totem_single_thumb.jpg
tags:
  - tech
  - security
  - privacy
---

In the age of mass surveillance, your personal information is much more easily
accessed by 3rd parties whom you may not necessarily wish to permit accesss.
But increased security usually comes at a cost of convenience. It is up to you
to decide how far down the rabbit hole of paranoia you want to fall, but doing
nothing only makes you a sucker. Defend yourself.


If you don't do anything else, do these things
----------------------------------------------

- assume the network is hostile; you're not special; *everything* is being
  recorded in a dragnet which can't be avoided
- never use the same password more than once (if one account is compromised, all
  accounts are compromised)
- use strong passwords (e.g., use `n_*8DkeX@nR0g3=@sAwP!0k` not `12345` nor
  `p4ssw0rd`)
- use a password manager (e.g., [1password](https://1password.com/) or
  [keypass](https://www.keepassx.org/))
- use a passphrase instead of a PIN to unlock your phone
  (e.g., "iamatalldinosaurfromouterspace" not "4321")
- use adblockers/filters (e.g.,
  [privacy badger](https://www.eff.org/privacybadger) and/or
  [ublock origin](https://github.com/gorhill/uBlock)) to prevent tracking
- only bring what you need across the border (it might get cracked or
  confiscated)
- be careful what you click; beware of scams; if you don't understand someone or
  something, don't do what they say
- don't trust people who call your phone; call them back at their official
  number so you know who you're dealing with
- use less software in general, and regularly update what you do use
  (minimize your attack surface)
- lastly, understand that *everything* you do on social networks is being
  recorded, analyzed by AI, and traded around the world with advertisers and
  governments (and intercepted by criminals); they're designed that way; act
  accordingly ;)


General Purpose
---------------

- never ever ever use the same password more than once! each service you use
  should have a unique password
- use "strong" passwords (e.g., >20 random digits pulling from all the symbols
  on your keyboard like `n_*8DkeX@nR0g3=@sAwP!0k`)
- use a password manager like [1password](https://1password.com/) or
  [keypass](https://www.keepassx.org/) to store all your individually unique, and
  super-strong passwords, so you don't need to remember them and can, thus,
  make them even stronger (e.g., I use 50+ digit random sequences if a service
  allows it)
- never use a real answer to so-called "security questions" because that
  information is stored as plain text and thus obtainable by potential
  attackers and is usually information that is publically accessible anyway
  (e.g., "what's your birthday?"); instead, treat these fields as passwords
  themselves and generate new, strong passwords using your password manager so
  that no one could possibly guess them (these "security questions" are usually
  the most vulnerable, and *un*secure, parts of an authentication system)
- use less software in general, and regularly update what you do use; if you
  don't need it, don't use it; the less software you're using in the first
  place, the lower the risk of an attacker cracking your system; if there's
  stuff on your devices you're no longer using, just get rid of it
- be aware of "phantom profiles"; companies can track what you're doing even if
  you're not logged in: they'll compile a bunch of information and associate it
  with an identifier (e.g., your IP address for your modem) and compare that
  against other data they've already collected (e.g., the last time you logged
  in, you used the same IP address) and then connect all that data with your
  real identity; just becaused you're logged out or in "incognito mode" doesn't
  mean you're not being tracked
- use "2 factor authentication" for anything that matters to you (e.g., Google,
  Facebook, Github, etc.); a strong password is a great first step, but for
  services that are important, add an additional requirement for
  authentication (e.g., an app that generates special codes on your phone like
  [Authy](https://authy.com/), a special biometric key like
  [Yubikey](https://www.yubico.com/start/), etc.)
- do *not* use SMS as your second factor (plain text messages can be intercepted
  by attackers and even spoofed so you unwittingly grant access to the attacker
  yourself!)
- use encryption whenever possible; if there's an ecnrypted option and a
  non-encrypted option, always choose the encrypted option (e.g., when
  accessing a website, use "https" so that your connection is secure; and be
  suspicious when a website doesn't offer a secure option for connecting with
  it: for example, [Letsencrypt](https://letsencrypt.org/) offers *free*
  SSL/TLS certificates, so there is absolutely no good reason why a website
  isn't using https)
- encrypt your emails by using a secure email service (e.g.,
  [Protonmail](https://protonmail.com/)); Google's Gmail, Microsoft's Hotmail,
  and Yahoo-mail can all read your emails, analyze them, and sell the data to
  others
- use a VPN for browsing; your ISP (and others, like the government)
  [can see everything you're doing on the internet]
  (https://www.eff.org/deeplinks/2017/03/five-creepy-things-your-isp-could-do-if-congress-repeals-fccs-privacy-protections);
  using a VPN encrypts all your signals between you and the VPN provider
  (which, obviously, places your trust with the VPN provider... but at least
  you control that trust) which at least minimizes the surface area for other
  3rd parties to be able to access your online activity (but tunneling through
  a VPN network can add latency and may not be usable for all tasks: things
  like gaming, video streaming, and file sharing may become unusable at peak
  times)
- if you're going to use a VPN, prefer one that is *not* based in the US or
  other [Five Eyes countries](https://en.wikipedia.org/wiki/Five_Eyes)
- use adblockers/filters (e.g.,
  [privacy badger](https://www.eff.org/privacybadger) and/or
  [ublock origin](https://github.com/gorhill/uBlock)) to prevent tracking (e.g., those
  little +1/like/tweet/pin icons on every website are sending your data back to
  social networks to track you even when you're not on those social networks)
- don't use the plugin actually called "adblock"; it whitelists some, but not
  all, advertisers and thus [allows trackers through and data to leak]
  (https://arstechnica.com/business/2015/02/over-300-businesses-now-whitelisted-on-adblock-plus-10-pay-to-play/);
  anyone who says "ad blockers are ruining the internet; how are content
  providers going to be able to keep making great content for you?" I feel is
  a bit disengenuous; I didn't agree to leak my data all over the network; if content
  sites stop messing with me, maybe I'll stop messing with them, you
  know? at the end of the day, it's *my* computer, and I have the final say
  over what it does, especially regarding what signals it broadcasts
- stop putting all your stuff in the cloud, at least if it's not encrypted;
  anything you put on someone else's server allows them to
  access/see/read/analyze your stuff; if you're going to do it, at least lock
  it up with "end to end encryption" so only you can access it; you should look
  for terms like "zero knowledge" and "privacy by design" from the cloud
  services you use
- don't leave your devices unattended; and if you do, make sure they're password
  protected (e.g., use a "lock screen" or apply a password to your screen
  saver)
- don't trust people who call you on your voice line and don't give them any
  information unless you are certain who they are (they could be phishing for
  personal info that can be used to compromise your security by getting things
  like your date of birth or social security number by asking you "security
  questions" which you might not think twice about); any legitimate company
  will be perfectly ok if you ask to call them back from their official phone
  number (which you can personally verify) so you know for sure who you're
  talking to (e.g., your bank, the tax agency, school, etc.)
- in the same vein, try not to do sensitive tasks over the phone in general;
  instead, do them in person (e.g., at the bank) or over a secure connection
  (like over https on the internet); your voice line is open and can be
  intercepted by anyone on the network
- backup all the things! do this as often as you're comfortable with; go buy a
  big external harddrive (they're cheap these days) and make a copy of all your
  junk onto it; then, ideally, store that harddrive in a different physical
  location so that if there's a disaster (like a fire or tornado or something)
  your data will still be safe (the chances of a disaster happening in two
  places simultaneously are a lot less likely)
- use full disk encryption on your computing devices; this protects your data
  from anyone who might gain physical access to your device (like through
  physical theft)
- do *not* enter your personal information into contests, mailing lists, or
  websites unless you fully understand why they need your information and what
  they're going to do with it; 99% of the time they're just trolling suckers
  for free data they can sell
- IoT? no thanks. The "internet of things" aims to connect all manner of
  previously "dumb" devices to the internet so that you can control them
  remotely. But my toaster makes toast just fine without being connected to the
  internet; why would I expose myself, needlessly, to an increased surface area
  for potential attack on my privacy and information security? For example,
  recently in Germany, a doll was exploited to spy on children, essentially
  wiretapping their homes:
  https://www.theguardian.com/world/2017/feb/17/german-parents-told-to-destroy-my-friend-cayla-doll-spy-on-children
- type it yourself; "auto fill" does exactly what it says it does. if someone
  other than you has your phone, do you really want all your password and
  credit card fields being automatically filled in?
- when you're paying for stuff with debit, obviously, don't let other people see
  your passcode; using "tap" for small transactions is good in that it limits
  visible data from leaking to those around you looking over your shoulder; but
  even so, be careful who can see your card number too (especially from
  security cameras in the place you're making your purchase) to make it that
  much harder for an attacker to access your account
- better yet, *paste* it from your password manager so you can't be
  [key-logged](https://en.wikipedia.org/wiki/Keystroke_logging)
- disable auto suggest/spelling services; these features take what you're
  typing, send it over the internet to a cloud server which analyzes what you
  typed in order to make a set of suggestions and then sends those suggestions
  back to your computer/device; all of this gets logged on that server,
  identifies you, and compromises the privacy of what you were typing
- disable Siri/Google Assistant/Alexa/Cortana (you are essentially wire-tapping
  yourself: these services, by definition, are always listening to your
  microphone and sending that data to remote servers that other people can
  see/listen to)


Mobile Devices
--------------

- stop using a 4-digit PIN for your password! (use a
  [passphrase](https://xkcd.com/936/) you can easily remember)
- use secure communications software; stop using the built-in SMS (texting) app
  that came with your phone! (anyone on the network can see what you're
  texting); instead, use an "end-to-end encrypted" app (e.g.,
  [Signal](https://en.wikipedia.org/wiki/Signal_(software)), by
  [Open Whisper Systems](https://whispersystems.org/))
  which does exactly the same thing but is only readable by you and the person
  you're texting
- disable fingerprint access (someone could force you to open your phone, could
  take your fingerprint without your permission, or could just
  [fake it](http://www.telegraph.co.uk/technology/2017/04/11/smartphone-fingerprint-scanners-could-easily-fooled-fake-prints/);
  passwords require reading your mind, which is a lot harder)
- only download apps from trusted sources (e.g., Google Play, Apple App Store)
  to minimize the chances of installing malware on your devices
- when you're done browsing, close all the tabs you opened
- when you're done using an app, shut it down
- when you're not using an app anymore, delete it
- anything you leave running in the background can also spy on you in the
  background
- keep your OS up to date (updates contain security improvements and bug fixes
  crucial to staying ahead of the surveillance game)
- when you're not using your phone, turn on airplane mode so it's disconnected
  from the network entirely (you'd be surprised what attackers can get from
  your phone [even when you're not using it](https://ssd.eff.org/en/module/problem-mobile-phones)...
  and this *does* happen, as we saw
  [IMSI catchers being used recently in Ottawa](http://www.cbc.ca/news/politics/imsi-cellphones-spying-ottawa-1.4050049))
- don't bring your mobile devices across the border (especially the american
  one) unless you absolutely need them (consider how you feel about granting
  the border agents access to all the data on your phone and possibly your
  online social media accounts; if you aren't comfortable with that, don't put
  yourself in a position where it will be possible for them to get access in
  the first place... if you don't want to hand everything over to them they
  could confiscate your devices, detain you physically, you might miss your
  flight and be required to answer questions to the authorities)
- never do anything that requires security over free wifi (the person running
  the wifi can see everything you're doing); just like ISP snooping, using a
  VPN can protect your information from prying eyes
- tweak your privacy settings (disable access to all apps/features unless you
  need them; e.g., does Facebook really need access to my physical location all
  the time? does Candy Crush really need access to my contact list?)
- turn off notifications (e.g., potentially private information could be
  displayed on your lock screen, wich an advesary could see, even if they don't
  have access to the device itself)


Hardcore
--------

- don't connect your password manager to the cloud (not strictly necessary, and
  you lose a *lot* of convenience, but you gain some piece of mind that
  the *only* possible way for an attacker to get at your passwords is by pwning
  your one personal computer; not dozens of networked web servers)
- while you're in transit, put your phone in a
  [Faraday cage](https://en.wikipedia.org/wiki/Faraday_cage) (or otherwise disable it) to
  prevent tracking and signal interception (e.g., from imsi-catchers); in fact,
  while you're at it, put all your cards in there too (e.g., to prevent access
  to rfid/tap-enabled wireless transactions)
- tighten up your "opsec" (operational security; that is, how you operate in the
  physical world) like, for example, consciously decide when and where you want
  your purchases to be recorded (e.g., every time you use your payment cards a
  computer is recording and tracking what you're doing with your money which
  can be seen by stores, banks, credit companies, and to whomever they sell
  that data); maybe pay with cash sometimes for things you don't want
  tracked ;)
- annonomize your online activities by using the
  [Tor](https://www.torproject.org/download/download-easy.html.en) protocol; this
  adds significant overhead (it's slow AF), and may not be useful for all
  your online activities; but for sensitive information (e.g., blowing the
  whistle on an organization or sending information to the press) you can keep
  your tracks more annonymous to prevent identifying yourself to anyone
  listening to the signals flowing through the network (e.g.,
  [here's how to annonymously send info to The Guardian](https://securedrop.theguardian.com/)
  using [Secure Drop](https://securedrop.org/))
- be careful what you're typing into social networks; treat it as a public
  space, like a city park; other people can (and are) watching what you're
  typing (e.g., Facebook can see things you started typing, but later deleted,
  even if you never actually *posted* it)
- run [your own VPN](https://github.com/jlund/streisand) so that you personally
  control who has access to your online activity and can eliminate the primary
  security issue of using a VPN provider (but this does increase the risk of
  your web server host having some access)
- build a [mesh network](https://en.wikipedia.org/wiki/Mesh_networking) and surf
  the internet without an ISP at all
- use a network monitor/filter/firewall to control what comes in and what goes
  out from your computer (e.g., [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html))
- activate self-destruct on your mobile devices (after a certain number of
  failed login attempts, the device will erase all data on it to prevent the
  data from falling into an advesary's hands)
