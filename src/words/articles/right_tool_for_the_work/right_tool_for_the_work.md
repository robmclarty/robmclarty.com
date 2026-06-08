---
title: The Right Tool for the Work
description: A field guide to AI-assisted development, from the lone craftsman to the autonomous crew, and the part of the job no tool can take.
date: 2026-06-08
banner: greek_sunset_banner.jpg
thumbnail: greek_sunset_thumb.jpg
tags:
  - architecture
  - ai
  - process
  - ethics
---

I would not use a sledgehammer to hang a picture frame, and I would not use
tweezers to move ten tons of gravel. This is obvious with physical tools and
somehow controversial with AI ones, where the prevailing hope is that a single
system will eventually do everything: design, build, test, ship, understand.
There is no such system today, and the wish for one misreads the problem. The
hope is always for a more powerful tool, but building was never the part that was
scarce. Even a system that could build anything would not decide what was worth
building, or whether it should be built at all, and those are the questions the
work actually turns on. What there is instead
is a spectrum of tools, most of them now AI-driven, each with a real shape:
things it is good at, things it is bad at, and a band of work where it is the
right reach. The skill that matters is not picking the most powerful tool. It is
matching the tool to the work.

What follows is a map of that spectrum as I see it today, organized as a kind of
workforce: from a single person working alone, to a large crew running on a
blueprint, to a machine that needs no crew at all. The point is not to rank them.
The point is that we need all of it, at different moments, for different reasons,
and that the choosing is the job.

## A lens: heads and hands

Before walking the spectrum it helps to have a lens, and the one I keep returning
to is simple. Every way of working with code is an arrangement of heads and
hands. The head is where judgment lives: the deciding, the converging, the
choosing of one shape over another. The hands are the labor: the typing, the
wiring, the turning of a settled decision into characters on disk. The modes
differ in who supplies the head, who supplies the hands, and how tightly the two
are coupled in time.

A second variable sits underneath: how much of the work is judgment, and how
settled that judgment is before you start. Some work is almost all hands and the
thinking is already done. Some work is almost all head and the typing is trivial.
Most real work is a moving mixture, and the trouble starts when a tool forces the
wrong arrangement onto the work in front of you.

The failure I want to avoid above all others is the collision of producing and
consuming: forming your own intent while absorbing a machine's output in the same
moment. You cannot do both. Reading overwrites planning. That single fact does a
lot of the sorting below.

## The craftsman, alone

Hand-crafted code, written one character at a time by a skilled person, is the
oldest tool and still the sharpest. Here the head and the hands are the same
head and the same hands, fused, fully engaged on every line. The cost is
everything you would expect: it is slow, it does not scale, and it spends the
most expensive resource you have, the sustained attention of a skilled human.
The return is a kind of knowledge nothing else produces. The person who wrote it
by hand knows every nook and cranny of the thing, because they looked at all of
it up close, under a magnifying glass. They can hold its behavior in their head,
predict how a change will ripple, and feel when something is wrong before they
can say why.

I think of this as the freelancer working alone. Maximum attention to detail,
complete control over what gets made and how, and the ability to both design a
good architecture and immediately execute on it, all in one mind. What the
freelancer cannot do is scale. One person, however skilled, cannot coordinate a
large team or lay down a system's worth of pipe by hand in any reasonable time.

So I reserve this mode for the work I cannot afford to get wrong: authentication,
payments, privacy, the handful of places where a subtle defect is not a bug but a
breach. For that work the slowness is not a cost, it is the point. I want the
maximum signal, the deepest understanding, the version of the code that lives
fully in a human head.

## The craftsman with a directed hand

Now keep the craftsman's head, but hand the typing to something else. This is the
mode I reach for most, and it is the one that is hardest to name, because the
popular version of it, "vibe coding," is the version that fails.

Vibing is sitting in the chat and working one prompt at a time, generating and
reacting in a continuous stream. In heads-and-hands terms, the model is running
both its head and its hands at full speed while you try to run yours alongside
it, and you lose, every time. It converges on an implementation before you have
made the design choices, so you spend the day anchored to a shape you never
chose, cleaning up after it. New code arrives faster than you can absorb it. It
feels productive and leaves you tired and unsure what you built. There is a band
where this is exactly right: throwaway prototypes, spikes, exploration you intend
to delete, anywhere judgment does not matter and there is nothing to protect. For
that, vibe away. For work you care about, it is a trap.

Guided vibing is the repair. The arrangement becomes your head, the model's
hands, one step at a time, under supervision. It does not take much to enforce: a
boundary between deciding and executing, held in place by a small amount of
scaffolding outside the chat, so the execution stream cannot overrun your
thinking. You converge on a decision, write it onto a durable surface, and
only then let the hands move. The plan does not live in your head, where the
flood erases it, and it does not live in the chat, which is ephemeral. It lives
somewhere you can return to, which is what lets you stop firefighting and start
reviewing.

In the workforce picture, this is still the freelancer, not a crew. You have not
hired a team; you have offloaded the physical labor of typing to a fast and
tireless pair of hands while keeping the entire head for yourself. It does not
give you the crew's scale. What it gives you is leverage on the individual: the
same single mind, freed from the keystrokes, able to spend its attention on the
part that was always the point, the deciding. That is the right reach when
judgment is load-bearing and unsettled and stays that way throughout, which
describes most real features, most bugs, and most refactors that you care about.

## The off-site contractor

Between the directed hand and the full crew sits a class of tools that take a
bounded task off your desk, work on it out of sight, and bring back a result for
review. Background and cloud agents are the clearest example: you scope a task,
send it off, it works on its own branch or in the cloud, and it returns with a
finished change. Plan mode is a smaller cousin of the same idea, where the tool
writes down what it intends to do and waits for your approval before it touches
anything.

These tools are built around one of attention's hard rules: generation and
absorption should be decoupled in time. The long turn is not the enemy; watching
it live is. So you let the work run while you do your own thinking, and you come
back to it later as an editor, on your schedule, in a bounded pass with a clear
end. You stop reacting in real time and start judging on your own terms.

I think of this as the off-site contractor. You give them a clear, well-scoped
job, they go away and do it, and you inspect the result when it lands. The
arrangement is your head up front and again at review, the model's hands in the
middle, decoupled across time. It works well exactly to the degree that the task
can be specified cleanly and reviewed honestly. Hand it something fuzzy and you
get back a confident, finished version of the wrong thing, which is worse than
nothing because it looks done. The discipline is in the scoping and in the
review, not in the watching.

## The crew on a blueprint

At the far end is full autonomy. The shape of it is a harness that plans, builds,
and evaluates across hours of fresh context, with an adversarial evaluator
checking its work and version-control checkpoints to fall back to. I have had one
run for over fifteen hours, completely unattended. Pointed at a detailed enough
specification, a harness like this can stand up an entire ecosystem of
microservices talking to each other over a common protocol, and it will produce,
in my experience, maybe eighty percent of a system on its own.

I think of a harness like this as a construction crew. The crew is not the
smartest set of
people in the room, and that is fine, because that is not their job. Give them a
strict blueprint and a good foreman to interpret it and orchestrate the work, and
they will build a great deal, fast, far faster than any single handyman could
hope for. What they cannot do is design their own architecture or exercise
judgment about what the building should be. They execute premade instructions at
scale, and they execute them literally, which is their strength and their danger
both.

The danger is drift. A small deviation at the start compounds into a large one by
the end, and it is hard to hold a fifteen-hour build perfectly in line,
especially since you cannot always imagine up front every nuance it will run
into. The blueprint is never quite complete, and the crew does not stop to ask;
it keeps building. So a harness like this is not a god tool, and treating it like one is how
you get a confident, enormous, eighty-percent-correct system that is subtly wrong
in ways you now have to go find. The remaining twenty percent, the tidying and
tweaking and polishing and the parts that needed judgment all along, is still
engineering work for a human.

None of that is a complaint. Laying down a lot of pipe quickly, without spending
human attention on it, is enormously valuable, and most systems contain a lot of
pipe. The crew earns its place precisely on the work that is large, repetitive,
and settled enough that the blueprint can carry it.

## The assembly line

One more tool belongs on the map, though it sits on a slightly different axis from
the rest. Deterministic automation, the kind you build in something like [n8n](https://n8n.io), is
not really about authoring novel systems at all. It is about taking a process you
already understand and freezing it into a track that runs the same way every
time: this webhook fires, that record gets created, this message gets sent.

In heads-and-hands terms there is no head at runtime. A head ran once, when you
designed the flow, and then you took it out and let the hands run on rails
forever. This is the assembly line. It is the wrong tool for anything that needs
a decision in the moment, and the right tool for high-volume, low-variance,
well-understood work where a decision in the moment would only be a chance to get
it wrong. The judgment all happens up front, in deciding what to automate and
how, and then the whole value is in never having to think about it again.

## A map, and the choosing

Lay them on a line and the pattern is clear. As you move from the lone craftsman
toward the autonomous crew, you trade per-decision attention and control for
scale and throughput, and you require the design to be settled earlier and
earlier before you start. The craftsman needs nothing settled; they discover and
decide as they go. The crew needs almost everything settled; the blueprint is the
whole game. The tools in the middle are the tools for the middle: judgment still
live, but the labor offloaded to whatever degree the work can bear.

- Reach for the **lone craftsman** (hand-crafted code) when being wrong is
  unacceptable and deep understanding is itself the deliverable: auth, payments,
  privacy, the load-bearing core.
- Reach for the **directed hand** (guided vibing) when judgment is
  live and unsettled but you want the typing off your plate: most real features,
  bugs, and refactors you care about.
- Reach for the **off-site contractor** (background and cloud agents, plan mode)
  when a task is well-scoped enough to specify cleanly and you can review the
  result honestly later.
- Reach for the **crew on a blueprint** (an autonomous plan-build-evaluate
  harness) when the work is large, repetitive, and settled enough that a detailed
  spec can carry it without your moment-to-moment presence.
- Reach for the **assembly line** (n8n and deterministic workflows) when a
  process is understood well enough to run on rails and you never want to make the
  decision again.
- And **vibe** freely when nothing is at stake: prototypes, spikes, exploration
  you will throw away.

Deciding which of these a given problem wants is not a preliminary to the work.
It is the work, or its visible edge. The edge, though, is not the whole of it.
Beneath the question of which hands to reach for sit three the spectrum cannot
answer: what the system should be, whether it should exist at all, and whether
anyone is still able to see it clearly enough to decide either. Those are not
points on the map. They are the reason there is a map.

## The work no tool does

Forty years ago, in [*No Silver Bullet*](https://www.cs.unc.edu/techreports/86-020.pdf), Fred Brooks drew a line between the essential complexity of
software, the difficulty inherent in the problem itself, and the accidental
complexity, the difficulty that comes from our tools and methods. His argument was
that no single advance would yield an order-of-magnitude gain, because tooling
only ever attacks the accidental part, and the essential part is the hard part.
The AI tools on this map are the most powerful assault on accidental complexity we
have ever had. The crew lays pipe; the contractor handles the well-scoped chore;
the assembly line erases the repetitive process. All of that is accident, and
burning it down is real value.

The essence is untouched. Someone still has to decide what the system should be:
which parts are relevant and which are noise, where the boundaries go, what to
simplify and what to leave alone. And those decisions are not purely technical.
They are business decisions wearing technical clothes, weighed against cost, risk,
maintenance, the expected rate of change, and profit, each of which a different
business weights differently. The right architecture for a company optimizing for
low risk is the wrong one for a company optimizing for speed of change. No tool on
the spectrum knows which company you are. You do, or you had better, and encoding
that judgment into a shape the tools can execute is the part that does not
transfer to them.

The loudest version of this argument right now pushes it somewhere bleak. If
building is cheap, it says, then building was never the scarce thing, and all
that is left is distribution: did anyone hear about it, did they buy it, did they
stay. The work is no longer how you build something but whether it should exist
at all and who it is for, and quality is a sentimental attachment the market does
not reward. The direction is right and the conclusion is wrong. It is true that
as the cost of building falls the scarce thing moves up the stack, and that there
is a layer of judgment sitting above architecture entirely: should this exist,
who is it for, who keeps using it once the novelty wears off. That layer is real
and rising, and an engineer who refuses to look at it is volunteering to be only a
pair of hands. But a higher layer does not erase the ones beneath it. For the
work that has to be right, every layer binds at once. A payments system nobody
markets is a failure; a payments system that goes viral and quietly loses
people's money is a catastrophe. Cheap building did not abolish quality. It only
removed the excuse that building was hard enough to be the whole job.

This is why matching the tool to the problem is not a chore you do before the real
work. It is the real work. Choosing the crew over the craftsman for a given module
is an architectural decision: it is a bet about how settled that module's design
is, how much it matters if it drifts, and how much of your scarce attention it
deserves. Make that call well across a whole system and you have done the
essential work. The tools just carry it out.

## A hand cannot refuse

There is one more kind of "should," and it sits beneath the commercial one. Not
should this exist because someone will pay for it, but should this exist because
it is right to make. A tool cannot reach that question at all. A model will
optimize for any goal you hand it, including a goal that harms people, and it
will pursue the harmful one as fluently as the good one, because it has no stake
in the outcome and cannot be held to account for it. Responsibility does not
transfer to a thing that cannot bear it. The hand does the work; only a head can
refuse to.

This holds all the way down, including at the lowest level, the individual
engineer. A soldier's job is to follow the chain of command, and a soldier is
still expected to refuse an order that is manifestly wrong, because following
orders has never been a defense. An engineer's job is to build to the spec, and
the spec is just another order, written by people, and executing it is a choice
the engineer makes. "I only built what I was told" is the same sentence in a
cleaner shirt. A spec describes what to build; it never judges whether to. The
point in the pipeline where a human can still say no does not move because the
typing got automated. If anything it matters more, now that the rest of the work
flows faster and with less friction toward whatever it was aimed at.

I learned this concretely once. I worked on an anonymous feedback product, and the
anonymity was not a comfort feature bolted onto it; it was the thing that made the
product work at all. People tell you the truth only when they cannot be identified
for telling it. Protect that, and two things happen at once: employees say what
they would never say to a manager's face, and the company finally hears what is
real instead of what is safe, which is the only kind of feedback anyone can act
on. The honesty and the value were the same thing. After the company changed
hands, I was asked to quietly de-anonymize parts of it, to attach names to things
like sexual orientation and medical status so the new owners could act on them.
That request did not just betray the product, it inverted it: the safeguard that
made the feedback honest became a mechanism for using it against the people who
gave it. Strip the anonymity out and you do not get a weaker version of the
product, you get a surveillance tool wearing its skin. No tool in the stack could
see that, and no spec flagged it. So I declined, and then I left. I do not
think it was heroic. I think it was the job, the part that was never going to
transfer to a machine.

The quieter version is more common and harder to catch: a tool that does something
the people it affects would object to if they knew, and simply does not tell them.
A system that quietly scores the people it watches, turning their behavior into a
number that then shapes the decisions made about them, none of which they were
ever told was happening. The harm there is not a bug, it is the feature, working
as specified. Spotting it is not a technical skill. It is the willingness to ask,
of a thing you are fully capable of building, whether it should be built at all,
and to accept that the answer is sometimes no.

## The highest use is illumination

There is one use of these tools I value above all the others, and it is not on the
spectrum at all, because it is not about producing code. It is about understanding
it.

The reflexive pitch for AI in software is automation: do the mundane busywork
faster, review the pull request faster, ship faster. I think that undersells the
thing badly. The deepest leverage is not in writing more code, it is in
comprehension. Most engineering pain does not come from typing too slowly. It
comes from working inside systems nobody fully understands anymore, where every
change is made half-blind, and the safest-looking move is to add another layer on
top of the layers already there. That is how cruft accretes: not from laziness but
from fog. People add to what they cannot see into, because adding is less
frightening than touching what is already there.

And it is not only foreign code, the inherited system you never saw built. The
same fog forms over your own work the moment there is enough of it, and it forms
fastest over code you did not type: the output of the crew, the contractor, the
directed hand, all of it arriving faster than you can build a real picture of it.
The more of your system is generated, the more of it you stand toward as a
stranger. Illumination is how you stop being a stranger to your own software.

There is a second reason, quieter and harder to admit. For a long time complexity
was where engineers kept their sense of worth. Mastering it was what separated the
senior from the junior, the line between I can build this and you cannot. When
your value is wired to the difficulty of the thing only you understand,
simplifying it means surrendering the very thing that made you valuable, and a
system nobody else can navigate starts to look less like a liability and more like
a moat. So the fog does not only frighten, it flatters. This is the harder
obstacle, because it is not ignorance but incentive, and no tool removes it for
you. Illumination asks for a trade most people resist: give up the security of
being the only one who understands the system, in exchange for the smaller and far
better prize of a system anyone can.

A tool that lifts the fog changes the whole equation. If AI can make the opaque
legible, can walk an engineer through the interlocking modules until they truly
grasp how the thing works, then that engineer stops adding blindly and starts
seeing the defects and the opportunities for themselves. And understanding feeds
on itself in the best way: the better you see a system, the more confidently you
can simplify it, and a simpler system is easier still to understand. Comprehension
and simplification turn each other, the same way complexity and fog turn each
other, only in the right direction.

There is a distinction worth drawing here, because it bounds what illumination can
give you. The craftsman's understanding is generative: they know the system
because they made every decision in it, and that is the deepest kind of knowledge
there is, the version that lives fully in a head. What a tool offers is
reconstructive: an understanding assembled after the fact, of a thing you did not
decide. I do not think the second ever fully equals the first. But that is the
wrong comparison to fixate on, because the choice is rarely between hand-building
everything and understanding it perfectly. It is between reconstructive
understanding and none at all. As more of what we ship is generated rather than
authored, reconstructive understanding becomes the only kind most of our code will
ever get, which is exactly why the tools that produce it matter more, not less.

So the AI tools I value most are not the ones that write the most code or review
it the fastest. They are the ones that answer "what on earth is going on in here"
faster than I could alone, that take something I was afraid to touch and make it
something I understand. Illuminating what was opaque is, I think, the highest use
of all of this, because everything else, every good architectural call, every
correct choice of tool from the spectrum above, depends on seeing the system
clearly in the first place.

## The posture

The shorthand for all of it is that none of these tools is a head. They are
arrangements of hands: some directed in real time, some sent off to work alone,
some running on rails laid down long ago. The head is yours, and the part of the
job that stays yours is the part that was always the real job: deciding whether to
build a thing at all and then what it should be, choosing which hands to reach for,
simplifying what got too complex to see,
and understanding the system well enough to do all of that on purpose. Get good at
that and the tools become exactly what they should be, a workforce that builds
what you have decided, fast, while you stay the one who decided it. There is no
silver bullet, and there does not need to be. There is a well-stocked shop and a
person who knows which tool the work in front of them is asking for.
