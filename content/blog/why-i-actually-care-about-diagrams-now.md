---
title: "Why I Actually Care About Diagrams Now"
date: "2025-11-24"
excerpt: "I used to think making diagrams was just boring university busywork. Turns out, future me really appreciates when past me actually documents things."
tags: ["Documentation", "Software Engineering", "Lessons Learned"]
readTime: "6 min read"
---

So I used to be really bad at documentation. Not in the "I write messy docs" way, but in the "why would I even bother" way.

Back then, my process was pretty simple: client tells me what they want, I build it, done. No diagrams, no fancy documentation, just straight to code. It felt efficient. Why waste time drawing boxes and arrows when I could just... make the thing?

Yeah, that didn't age well.

## The Problem With One-Shotting Everything

The thing about just building exactly what the client asks for is that it works great... until it doesn't.

I'd finish a project, deliver it, move on. Then a few months later, another client would come asking for something really similar. Like, 80% the same, but they need different attributes or slightly different behavior.

And I'd look at my old code and realize I'd built everything so specifically for that first client that I couldn't reuse any of it. I'd have to rewrite the whole thing.

That happened enough times that I started to think maybe I was doing something wrong.

But the real problem hit when I'd come back to my own code after a few months. I'd open up a project and just... stare at it. What does this do? Why did I structure it this way? What was I even thinking?

I'd written it, but I couldn't remember the reasoning. And the code alone doesn't tell you that. Code tells you *how* something works, but not *why* it exists or *what problem* it's solving.

That's when I realized: I needed something for future reference. Something that would help future me understand what past me was thinking.

## University Ruined Documentation For Me

Okay, so why didn't I just start making diagrams earlier?

Honestly? University kind of ruined it for me.

In university, we had to do all this documentation stuff - sequence diagrams, class diagrams, the whole UML package. But the way they made us do it was so backwards.

You had to create the *perfect* documentation first, before writing any code. Everything had to be formally correct, properly formatted, fully detailed. Then and only then could you start coding.

And the annoying part? At the end of the day, they only cared about the result. They wanted screenshots of the program working, or a video recording of it doing its thing. All that documentation work felt like just extra steps to get to what actually mattered.

So I learned to see documentation as this boring, time-consuming thing that didn't really help anyone. It was just bureaucracy.

Took me a few years in the real world to realize: oh, documentation is actually useful when you're not doing it for a grade.

## What Changed

I started making diagrams again, but this time for me. Not for a professor, not for some formal requirement, just for future reference.

Three kinds of diagrams became my go-to:

**Sequence diagrams** - These show what the user does and how the system responds. Like, user clicks this button, which calls this service, which does this thing, which updates that. It's basically the story of "what happens when someone uses this feature."

**Class diagrams** - Just showing how different parts of the code talk to each other. Which classes know about which other classes, what depends on what. Helps me see if I'm making a tangled mess before I actually make it.

**Data diagrams** - Where does data come from, how does it move through the system, where does it get stored, how is it transformed. This one's been surprisingly useful because data flow is usually where the confusing parts hide.

## The Part That Actually Surprised Me

What I didn't expect is how much clients like diagrams.

When you're explaining a system to a client, code is useless. They don't care about your beautiful functions or your clever abstractions. But show them a sequence diagram of how their users will interact with the system? They get it immediately.

I've had meetings where I'm trying to explain something with words and you can see people getting lost. Then I pull up a diagram and suddenly everyone's on the same page. They can point at parts and say "wait, what if the user does this instead?" or "oh, we also need it to do this other thing here."

It makes conversations so much easier. The diagram becomes this shared thing we can all look at and understand, even though we're thinking about it from different angles.

## How I Actually Use Them Now

These days, I don't start coding right away. I know, weird flex from someone who used to think documentation was a waste of time.

Before writing anything significant, I spend time with the team just drawing stuff out. What are we building? How do the pieces fit together? What happens when things go wrong?

Sometimes it's just a whiteboard session. Sometimes it's proper diagrams in a tool. Doesn't really matter. What matters is that we're all thinking through the system together before anyone writes code.

And yeah, in the world of agile where everything's supposed to be fast and iterative and changing all the time, this might seem slow. Taking a full day just to brainstorm and make diagrams before a sprint? That's not exactly "move fast and break things."

But honestly? It makes the rest of the sprint so much smoother.

When everyone understands what we're building and why, there's less back-and-forth, fewer "wait I thought we were doing it this way" moments, less code that needs to be thrown out because it was solving the wrong problem.

That one day of documentation saves way more than one day of confusion later.

## The Thing About Generic Code

Remember how I said I used to build everything too specifically? The diagrams help with that too.

When you're drawing out how something works, it's easier to spot the parts that are too tied to one specific client. You can see where you're making assumptions that won't hold up for the next project.

Then you can ask yourself: what if this attribute was different? What if they needed three of these instead of two? What if the data comes from somewhere else?

And you can design for that *before* you code yourself into a corner.

I'm not saying to over-engineer everything and add flexibility you don't need. But there's a difference between code that's specific because it should be, and code that's specific because you didn't think about it.

## It's Still Boring Sometimes

I'm not going to pretend I love every minute of making documentation. Sometimes it's still tedious. Sometimes I'd rather just start coding because I can already see the solution in my head.

But I've learned that "I can see it in my head" is a trap. Because in three months, it won't be in my head anymore. It'll just be code that I don't quite remember.

And when the next person joins the team, or when the client asks why we did it this way, or when we need to add a new feature to a system I built last year... those diagrams are there.

They're like leaving notes for your future self. And future me is always grateful when past me actually left good notes.

## What I Tell My Team

I push for this stuff with my team now. Not in a "we must follow the formal process" way, but in a "trust me, you'll thank yourself later" way.

Make the diagrams. Write down why you made that decision. Document what the system is supposed to do, not just how it does it.

It might feel like it's slowing you down in the moment. But it's actually speeding you up over the life of the project.

And maybe that's the thing I wish I'd understood earlier: documentation isn't about the immediate moment. It's about every moment after that.

## So Yeah

I went from someone who thought diagrams were boring university busywork to someone who genuinely wants to make them before writing code.

Not because I had some big revelation about The Importance of Documentation™, but because I kept running into the same problem over and over: not understanding my own code later, building things too specifically, confusing my teammates, confusing my clients.

Turns out diagrams solve all of those problems. Who knew?

(Okay, probably everyone who actually made diagrams knew. But I had to learn it the hard way.)

If you're someone who skips the documentation because it feels like extra work... I get it. I was you. Maybe you need to make the same mistakes I did before it clicks, or maybe you can learn from my pain and just start making the damn diagrams now.

Either way, future you will have opinions about what current you decides.

Choose wisely.
