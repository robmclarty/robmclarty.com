---
title: Creating an Optimization Team
date: 2017-11-15
banner: zen_banner.jpg
thumbnail: zen_thumb.jpg
tags:
  - tech
  - devops
  - process
---

I want to start a small team (or maybe, at least in the beginning, just me)
who's mission is to stay on top of how technology is changing, learn how best
to harness new and existing tech, share and teach good techniques to others,
build tools that automate best practices that are used most, learn how teams
are working today and help optimize how they're working, and finally to
practice these technique, and use these tools, directly through project work in
order to reflect on their efficacy and eat our own dog food to make them even
better.

other possible name riffs:

- technical excellence
- research and development 
- boost 
- skunkworks 


Problems
--------

- re-inventing wheels
- repeating mistakes
- not learning from experiences
- lack of exerpience in managing complexity (e.g., software architecture)
- not many examples or standards to compare and choose
- not many opportunities to try new things (and improve how we work)


Objectives
----------

- research (new ideas)
- document (remember)
- build tools (enablement & automation)
- set examples (sensible defaults & standards)
- visit (observe & experience)
- polinate (share & teach)
- excecute (practice & reflect)


Research
--------

As a technology company, we need to stay on top of what is happening and learn
about what new possibilities are available for our next engagement. I'm not
thinking about *what* we're building, but *how* we're building it: software
development, testing, deployment, hosting, system architectures, workflows,
algorithms, frameworks, basics (e.g., html & css seem like they've been
forgotten), etc. I'm interested in best practices for doing what we're doing;
that is, building software (whatever it is that that software does). So, it's
not necessarily about researching entirely new problem domains, as I believe
that aspect is being handled by other initiatives (e.g., AI, CI, XR, etc.), but
about optimizing within the context of our daily deliverables.


Document
--------

Write stuff down and make it highly discoverable and accessible. I believe
Stackoverflow has been a great addition to our toolset for sharing ideas and
making them available. But I also believe we could work on some longer-form,
more formal, artifacts that dig into certain core problems in greater details.
For example, there seems to be a great aversion to CSS and a desire to embed
all styles in-line into components (which creates problems in some
circumstances and should be balanced with other architectural needs). An
in-depth article/tutorial/example/workshop/planetarium might help make working
with CSS easier and less scary and enable our developers to make choices that
best balance their current problem domain, not simply choosing what's easiest
in the short term.


Build Tools
-----------

Many of the best practices we repeat on each project could be automated, made
into re-usable modules, and as such, iterated upon and improved through a more
formal software development process through Git and PRs. I started developing
these for myself (what Dan Abrimov calls "toolboxes") in my projects Soko,
Cred, and React component examples. I re-use these tools on all my new projects
and it eliminates a lot of boilerplate work so I can jump right into the middle
of my project. But it also helps me upgrade, improve, and iterate on my
process, through those tools, and apply those upgrades to all my past projects
with a simple `npm install` command. I'd like to continue making these sorts of
tools and create new ones for problems that other teams have encountered which
are slowing them down.


Set Examples
------------

There's been a lot of talk about standards and sensible defaults. There is also
a lack of things to look at for new and old developers to learn from past
experiences. Given the company has an aversion to sharing code-bases across
teams, the next best thing is to make generic example code to demonstrate how
to solve certain problems through real working code. I've started doing this
myself for alternative techniques for creating React components, how to build a
Redux architecture, how to use React's context API, how to model data using
Knex, and how to build a simple Express API. We should build more examples like
this for the systems we are using to provide teams starting new projects with a
foundation upon which they can build and iterate.


Visit
-----

I originally thought that this was the purpose of the "optimization team". But
given that it isn't, I'd like to move around the company and visit different
teams. I want to learn how they are currently working by actually participating
in their workflow, getting hands-on experience with their code, and
really *feel* the problems they're facing so that I can understand what the
challenges are. I find often times many of the biggest challenges are
ineffable, or are difficult to express, or are perhaps their expression is
being inhibited by process and bureaucracy. I want to turn over the rocks and
see what's really going on so we can help from the bottom up.


Polinate
--------

Through visiting teams and learning about their challenges, I think that is also
a great opportunity to share ideas across teams, suggest alternative methods
and techniques, and provide tools that automate and improve existing processes.
We are getting better at talking to each other, but we are still a very siloed
community between our different teams. I consistently see different teams
re-inventing wheels in different ways, repeating mistakes already learned by
others, and other inefficiencies both in practice and process which could
easily be alleviated simply by sharing knowledge across those project
barriers.


Execute
-------

When visiting teams, I'd like to actually be a part of that team temporarily and
directly contribute to their objectives to help them move forward and improve
how they work. But I would also like to take charge of some projects directly
and guide them from the very beginning because I believe that there are
different problems that take place in design and architectural phases
(which don't happen as often) which have large ramifications for the long-term
success of a project. I want to be able to practice the methods and techniques
we develop through research and actually use the tools we build in real-world
applications. This will help eat our own dog food, sus out challenges, and
provide a proving ground for further improvements and iterations. Perhaps this
could be for smaller projects that I could work on part-time or something as
tech-lead (like a 50/50 split between working on new things, and working with
other teams and projects). This doesn't need to be an all-or-nothing
segregation either: it could be something like in the morning I do R&D, and in
the afternoon I do project work.


Conclusion
----------

Personally I feel like my capabilities are under-utilized. I have more to offer
than just being a pair of hands to complete tickets. I have extensive
experience working in many different ways with many different kinds of teams,
and I have a great capacity for working with the unknown and finding new things
in the dark that I can bring back and share with others. I see Myplanet wanting
to improve, but still strugling with how to do it. I can see opportunities to
improve, and I want the ability to do it.


Notes
-----

- start a project from the beginning
- design the application architecture
- lead the team in both process and style (that includes project management; but
  not "product" or client management)
- i'd like to do an "intermitent" vacation (bike 2500km and wfh every other day
  for 1-2 days)
- i want to build tools
- i want to start a real optimization team (a team that deals with the Unknown,
  figures it out, and shares their findings with the rest of the company to
  help streamline our processes and capabilities: to optimize)
  - at first, just me
    - if process is seen to be beneficial, team could grow
    - people whom i believe would be well suited: Dylan, Michael Sharpe, Sergio,
      David Colburn, Luis (this isn't exhausted, but I've worked with these
      people and know they'd be effective at this sort of exploratory,
      ill-defined, task)
  - objectives:
    - research and document 
      - best practices and techniques in technical areas (not necessarily a
       one-size fits all list, but a set of options that may or may not be
       suitable in different contexts); I've been working on essays for a book,
       but I think it would be more useful to share these ideas, and
       continuously develop new ones
    - build re-useable tools 
      - that encapsulate MP's best practices into automated software (e.g., like
       i did for Soko, Cred, React/Redux examples, etc.)
    - visit teams and learn what and how they're doing things
      - gather good ideas
      - spread them around to different teams
      - teach how to use tools and other techniques
      - present emergent technology ideas and how they could be useful at MP in
        lightening talks and planetariums (e.g., like i did for JWT)
    - implement these ideas 
      - work on projects as tech lead (perhaps in a part-time capacity--say 3
        days on project, 2 days on R&D--so there is always time to continue
        MP's understanding, as above, in parallel)
