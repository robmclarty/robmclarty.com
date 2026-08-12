---
title: AI Like Consciousness
subtitle: "Deterministic functions are the subconscious of a system, and the model on top has one job: size up the terrain, pick the maneuver, and delegate the work."
date: 2026-08-12
published: false
tags:
  - ai
  - consciousness
  - architecture
  - cognitive science
---

AI is _like_ consciousness. Not AI _as_ consciousness. The "like" is doing all the work in that sentence, so let me get the disclaimers out of the way first.

What we're now calling "AI" is not actually intelligent, artificial or otherwise. We've bastardized the term so thoroughly that we had to invent _new_ acronyms like "AGI" to describe the "actually for realz trust me bro" intelligence (which will probably never happen). And since we don't even know what "consciousness" itself _is_, any claim to be building it, or to have already built it, is a flat out lie by someone trying to sell you something, and those people can fuck right off. What we have right now is symbol manipulation, the kind of thing Marvin Minsky might talk about. John Searle has one or two things to say about that. Check those guys out if you want to go deeper down that rabbit hole.

But I'm not here to argue about whether the machine is conscious. I'm here to argue that consciousness, or at least the bits and pieces of it we're able to discern, is a useful _analogy_ for where AI belongs in a system.

The frame is this: AI is like consciousness the way deterministic functions are like the subconscious.

If that smells like Kahneman's System 1 and System 2, it should: fast, automatic, cheap processes underneath; slow, deliberate, expensive reasoning on top. I'm just pointing the split at software architecture instead of psychology.

The goal is to define as much of our problem/solution context as subconscious deterministic functions: code that works the same way every time, that you know what to expect from, that you can trust to do what it does, again and again. Then, _like_ consciousness, AI serves the role of _orchestrating_ those subconscious functions, routing to the optimal solution for the problem of the day.

When I say "optimal" I don't mean exhaustively, globally optimal. If you wanted that, you'd have to systematically search every function, and that takes a long slow amount of time; the lion charging toward you will be done eating before you've decided to gtfo. I mean, given the circumstances and the imminent timeframe allotted, quickly (even heuristically) spinning the rolodex of subconscious functions and picking a good solution before time is up. A _relevant_ selection, in a _sufficient_ amount of time, that _adequately_ addresses the circumstances. Herbert Simon called this "satisficing". _That_ is what I mean by "optimal".

Mountain biking works exactly this way. When you first start, your (real) consciousness is flooded with sensory input and you move slow, thinking about every possible choice of line before you and every possible consequence, trying to pick the "optimal" choice. That is very taxing. You can't move fast while considering every possibility at the same time, and by the time you decide to turn right and avoid that tree, you may have already crashed into it. The optimization is to offload as much of your bike-handling technique to your subconscious as possible. Then your _consciousness_ can, simply, focus on picking from a small selection of relevant subconscious maneuvers, just in time (with enough time left to actually execute the upcoming feature before you hit it). You choose faster, more effectively, and more accurately, without loading all the motor skills and muscle memory into working memory: you just decide "execute shralp maneuver 3" and the subconscious function takes over moving your body in that way. The better you get at _that_ skill, the faster you can go, because you aren't considering a million possibilities at every moment. You're just seeing "tree ahead: right line looks safe and has a catch berm; execute flat-turn 2 and anticipate some sliding" rather than "that rock looks sharp, I don't want to hit that, there's a tree coming! The ground is loose and sandy and I'm sliding! My goggles are scratched. There's a bug in my mouth! My feet hurt. My heart rate is rising. What should I have for lunch? OH SHIT!!!!"

We want to avoid using consciousness as much as possible because it is the most expensive functionality by far. It consumes the most energy and the most resources, and it is the most erratic and unpredictable, not necessarily always to the benefit of the host system. The more of our solutions we can move into deterministic scripts (subconscious functions), the more functions we can run, the more quickly we can move, the more problems we can solve, and the more effective we can be at our goals. The same is true of encoding software logic in hardware: vast improvements in performance, speed, predictability, and reliability compared to the resources needed to run dynamically changing software.

This is exactly how I think about agentic coding harnesses. The deterministic verification pipeline (types, lint, tests, dead code, exit 0 means done) is the subconscious: cheap, repeatable, trustworthy, the same answer every time you ask. The model is the consciousness-like layer on top. It shouldn't grind through every check itself; it should survey the situation, pick the next maneuver, delegate the work to a dedicated tool, and read the signals that come back. Every time you catch a model burning tokens re-deriving something a script could have told it instantly, you're watching a beginner mountain biker consciously thinking about their braking fingers.

But that's not to say we don't use consciousness. We _need_ it. There will always be situations no deterministic function anticipated, and something has to notice that, size up the terrain, and route the work. The point is: offload _as much as possible_ to subconscious functions, and reserve the expensive, higher-order, situationally-aware layer for the one job it's uniquely suited to: choosing the optimal tool for the job at hand, then delegating the work to a dedicated function.

## References

- Marvin Minsky, [_The Society of Mind_](https://en.wikipedia.org/wiki/Society_of_Mind). Intelligence as an assembly of many small, mindless processes ("agents") rather than one unified thinker. The original "mind as orchestrated functions" picture.
- John Searle, [the Chinese Room argument](https://plato.stanford.edu/entries/chinese-room/) (Stanford Encyclopedia of Philosophy). The canonical case that symbol manipulation, no matter how convincing, is not understanding. His original 1980 paper is ["Minds, Brains, and Programs"](https://en.wikipedia.org/wiki/Chinese_room).
- Herbert Simon, [satisficing](https://en.wikipedia.org/wiki/Satisficing) and [bounded rationality](https://en.wikipedia.org/wiki/Bounded_rationality). Decision-making under real constraints of time, information, and compute: pick a good-enough option before the deadline instead of exhaustively searching for the best one.
- Daniel Kahneman, [_Thinking, Fast and Slow_](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow). The System 1 / System 2 split: fast, automatic, cheap processes underneath; slow, deliberate, expensive reasoning on top.
