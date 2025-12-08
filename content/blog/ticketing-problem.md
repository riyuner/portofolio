---
title: "The Ticketing Problem"
date: "2025-12-08"
excerpt: "Why buying tickets online feels like a battle, and what can be done about it."
tags: ["Discussion", "Ticketing Problem", "System Design", "User Experience"]
readTime: "15 min read"
---

The holiday season is here! Everyone is busy planning their holidays, buying tickets for festivities, or booking flights to their favourite destinations. You open the website, click "Buy Tickets," and then... nothing. The page freezes. You refresh. You wait. You try again. The tickets are gone.

This is the ticketing problem.

## What Is the Ticketing Problem?

Whenever I think about this problem, it strikes me how deceptively complex it is. In the physical world, ticketing is straightforward—you queue up, wait your turn, and buy your ticket. First come, first served. Simple.

But in the digital world, there's no physical queue. Thousands—sometimes millions—of people click "Buy" at the exact same moment. The system has to decide: **Who gets the ticket?**

Here's the fundamental question that makes this so tricky: *When does a ticket become "yours"?*

- Is it when you click "Add to Cart"?
- Is it when the item appears in your cart?
- Is it when you start entering payment details?
- Or is it only when the payment is successfully processed?

Each answer creates different problems and different frustrations.

## The Frustrating Scenarios

### 1. The Disappearing Cart

You've made it! The ticket is in your cart. You're entering your credit card details, double-checking the CVV, and then—*poof*—the ticket is gone. "Item no longer available."

This happens because many systems only *soft-reserve* items in your cart. The ticket isn't truly yours until payment completes. If you take too long, or if someone else completes their payment faster, the system releases your reservation.

It feels unfair because you *had* the ticket. You were so close.

### 2. Queue Position Roulette

Many ticketing platforms now use virtual queues. You join the queue, see your position (maybe #45,231), and wait. The number slowly decreases. You're getting closer!

Then your internet hiccups. Or you accidentally hit refresh. Or your browser crashes.

When you reconnect, you're back at #89,000. All your progress—gone.

### 3. The Bot Invasion

While you were carefully reading the terms and conditions, automated bots bought 500 tickets in 0.3 seconds. These tickets will appear on resale sites within minutes, marked up 300%.

You never stood a chance. The bots don't need to read. They don't need to enter credit card details. They're programmed to purchase faster than any human possibly could.

### 4. The Overselling Nightmare

Sometimes the system fails in the opposite direction. More tickets are sold than actually exist. You have a confirmed ticket, a receipt, everything looks legitimate—but when you arrive at the venue, they tell you the event is oversold.

This typically happens when systems aren't properly synchronized, or when they can't handle the concurrent load and make duplicate allocations.

### 5. The Flash Sale Frenzy

This isn't just about concert tickets anymore. The same problem plagues:

- **Limited edition sneaker drops**: Nike, Adidas, and other brands release limited quantities that sell out in seconds
- **Gaming console launches**: PS5, Xbox, Nintendo Switch during shortages—gone before pages fully load
- **E-commerce flash sales**: 11.11, Black Friday, holiday sales with "limited stock" items
- **NFT mints and crypto drops**: Thousands competing for a fixed supply, crashing platforms
- **Restaurant reservations**: Trying to book that viral restaurant when reservations open

What makes flash sales particularly frustrating is the *artificial scarcity*. Companies deliberately limit supply to create hype, knowing full well their systems can't handle the demand they're generating. The exclusivity is the point—but so is your frustration.

The sneaker world has become especially notorious. "Raffles" and "draws" are now common because traditional drops were being dominated by bot networks. Some people run multiple devices, multiple accounts, and automated scripts—turning a purchase into an arms race.

## The Technical Complexity

The core challenge is **concurrency at massive scale**.

Imagine 100,000 people trying to buy 1,000 tickets. That's 100,000 near-simultaneous requests hitting the same database, trying to modify the same inventory count. Without proper handling, you get:

- **Race conditions**: Two people both see "1 ticket remaining," both click buy, both get confirmations—but there was only one ticket.
- **Database locks**: To prevent race conditions, the system locks the inventory during each transaction. But with thousands of concurrent requests, everything grinds to a halt.
- **Server overload**: The sheer volume of requests can overwhelm servers, causing timeouts and failures.

### The Queue Dilemma

Virtual queues were invented to solve the overload problem. Instead of everyone hitting the purchase page simultaneously, users wait in an orderly queue.

But this creates new questions:
- What happens if someone refreshes?
- What if their connection drops?
- Should their queue position be saved? For how long?
- What about people using multiple devices or browsers?

There's no perfect answer. Being too lenient means people can game the system. Being too strict means legitimate users lose their place unfairly.

### The Hidden Dependency: Payment Systems

Here's something most people don't consider: **the ticketing system is only as fast as its slowest dependency.**

When you click "Pay Now," your request doesn't just go to the ticketing platform. It triggers a chain of external calls:

```
Your Browser → Ticketing Server → Payment Gateway → Bank/Card Network → Response Back
```

Each step can fail. Each step can be slow. And here's the critical problem: **payment gateways have their own capacity limits.**

During a major ticket sale, thousands of payment requests hit the gateway simultaneously. The payment provider—whether it's Stripe, PayPal, Midtrans, or a local bank—might:

- **Rate limit requests**: To protect themselves, they throttle incoming transactions
- **Experience timeouts**: Their own servers struggle under load
- **Return ambiguous responses**: "Payment pending" or timeout errors leave everyone confused
- **Process slowly**: Each transaction takes longer when the system is overloaded

This creates a nightmare scenario: the ticketing system works fine, you've got your ticket reserved, but the payment takes 30 seconds to process. By the time it completes, your reservation has expired. Or worse—the payment goes through but the ticketing system already released your seat.

**The payment bottleneck is often the real killer of ticketing experiences.**

Some real situations this causes:

- **Double charges**: Payment times out, user retries, both payments eventually process
- **Ghost reservations**: Payment fails but ticket is marked as sold
- **Cascading failures**: Payment slowdown causes ticketing server queues to back up, making everything worse
- **Inconsistent states**: Ticketing system says you have a ticket, payment system says you don't (or vice versa)

This is why you sometimes see "Payment processing, please wait" for agonizingly long periods during high-demand sales. The ticketing platform is waiting on an external system they don't control.

## Real-World Disasters

### Taylor Swift's Eras Tour (2022)

When tickets went on sale for Taylor Swift's Eras Tour, Ticketmaster's system spectacularly collapsed. Over 14 million users tried to buy tickets simultaneously. The queue system failed. People waited for hours only to see error messages. Many who got through had their transactions canceled.

The debacle was so severe it led to a U.S. Senate hearing about ticketing monopolies and practices.

### Train Ticket Chaos

In many countries, train tickets for peak travel periods (holidays, festivals) go on sale at a specific time. At that moment, millions attempt to book simultaneously. Websites crash, apps freeze, and those who manage to get through often find only the most expensive options remaining.

### Concert Presales Gone Wrong

Artists often offer "presale" codes to fan club members, promising them first access. But when presale participants number in the hundreds of thousands and the venue holds 20,000, the presale itself becomes its own ticketing nightmare.

### The PS5 Launch Disaster (2020)

When Sony launched the PlayStation 5, retailers' websites crashed globally. People who had been waiting for hours watched their carts empty. Bots scooped up inventory so quickly that many stores sold out before regular customers could complete a single transaction. Within hours, PS5s appeared on resale sites for double or triple the retail price.

### Sneaker Drops: Every Weekend

For sneakerheads, this isn't a one-time event—it's every hyped release. Sites like Nike SNKRS have become synonymous with the "L" (loss). Users tap frantically, only to see "Sold Out" seconds after launch. The resale market now dwarfs the retail market for limited releases, with some shoes selling for 10x their retail price.

## The Fairness Question

Beyond the technical challenges, there's a deeper question: **What does "fair" even mean?**

### First-Come-First-Served

The traditional approach. Whoever clicks fastest wins. But is this really fair?

- People with faster internet connections have an advantage
- People who can be online at exactly the right moment (not at work, not in a different timezone) have an advantage
- Bots have an insurmountable advantage

### Lottery Systems

Some events now use lotteries. Everyone registers interest, and winners are randomly selected to purchase tickets. This eliminates the speed advantage and defeats bots.

But is randomness fair? Someone who's been a fan for 20 years has the same chance as someone who heard about the artist last week.

### Verified Fan Programs

Ticketmaster's "Verified Fan" program tries to identify real fans versus resellers. You register in advance, the system evaluates your "fan score," and priority is given accordingly.

But how do you measure fandom? What if you're a new fan? What if you're buying for someone else?

### Dynamic Pricing

Some argue for market-based approaches: let prices rise with demand until supply meets demand. No queues, no crashes—if you're willing to pay more, you get the ticket.

Critics call this "scalping with extra steps." It prices out regular fans and turns ticket buying into an auction only the wealthy can win.

## A Different Approach: What If We Flipped the Model?

Most current systems follow this flow:

```
Select Ticket → Reserve → Enter Payment → Process Payment → Confirm Ticket
```

The payment happens *after* the reservation, and the ticket is only truly yours once payment completes. This creates a race: your reservation might expire while you're waiting for payment to process.

**But what if we flipped it?**

What if the flow looked like this instead:

```
Enter Queue → Process Payment → Check Availability → Assign Ticket (or Refund)
```

In this model:
1. **Payment happens first**. You commit your money upfront.
2. **The system receives your payment confirmation**.
3. **Then** it checks ticket availability.
4. **If available**: ticket is assigned to you.
5. **If not available**: immediate automatic refund.

### Why This Might Work

This approach fundamentally changes the problem. Instead of thousands of people racing to reserve-then-pay, you have:

- **Commitment filtering**: Only people willing to actually pay enter the queue. This dramatically reduces frivolous reservations and bot-created carts that are never completed.
- **Decoupled timing**: The payment can take as long as it needs—there's no reservation expiring in the background.
- **No phantom inventory**: Tickets are never "soft reserved." They're either available or they're not.
- **Fairer refund model**: If you don't get a ticket, you get your money back immediately. No wasted time, no uncertain waiting.

### Identity-Based Queue Fairness

But we still have the multi-device problem. What stops someone from opening 50 browsers and entering the queue 50 times?

Here's an idea: **tie queue position to identity, not devices.**

- One national ID (or verified identity) = one queue slot.
- Want to buy tickets for friends? You can—but you're using *their* queue slot, not creating extras for yourself.
- If you need to re-enter the queue later (for a different event, or to buy additional tickets), your ID isn't "locked out"—it just gets a new queue position.

This means:
- You can only be in one position in the queue at a time
- Bots would need millions of valid, unique national IDs (much harder than creating email addresses)
- Buying for others is still possible—you authenticate once for the person you're buying for
- The system doesn't permanently penalize you for buying tickets before

### The Uncomfortable Questions

Of course, this approach raises its own questions:

**Privacy concerns**: Are people comfortable submitting national ID for concert tickets? Different cultures have very different attitudes toward this.

**Accessibility**: Not everyone has government ID. Not everyone can easily get verified. Does this exclude vulnerable populations?

**International sales**: How do you verify identity across countries with different ID systems?

**The refund experience**: Even if refunds are instant, people might feel uncomfortable paying before knowing if they'll get a ticket. It requires trust in the system.

**Edge cases**: What about families? Corporate purchases? Gifts for people who aren't present?

### Is This Better? Or Just Different?

I'm not claiming this is *the* solution. It's a thought experiment. A provocation.

And I should be honest: **this approach would create entirely new problems**.

**The refund system becomes critical infrastructure.** If thousands of people don't get tickets and need instant refunds, can the refund system handle that load? What happens if refunds are delayed? Now you've moved the bottleneck from the payment system to the refund system. Different problem, same category of frustration.

**Is it really fair?** Some might argue this model punishes cautious buyers—people who don't want to risk their money without certainty. Is that fair to them? And what about people with limited funds who can't afford to have money "in limbo" even for a few minutes?

**Trust is a requirement.** Users must trust that the refund will actually come. In some regions, refunds can take days or weeks. The entire model collapses without instant, reliable refunds.

**New gaming opportunities.** People might find ways to exploit the refund system—maybe to temporarily hold tickets for friends while they decide, or to abuse refund policies in ways we haven't anticipated.

The current model is clearly broken. But every alternative embeds different tradeoffs. This payment-first, identity-based approach trades:

- **Speed** for **commitment**
- **Anonymity** for **fairness**
- **Uncertainty during checkout** for **uncertainty before checkout**
- **Payment system load** for **refund system load**

Maybe that's a worthwhile trade. Maybe it isn't. Maybe there's a hybrid that takes the best of both worlds.

What I find interesting is that we rarely question the fundamental assumption: *reserve first, pay later*. That model made sense for physical stores. Does it still make sense for digital scarcity? And if we change it, are we truly solving the problem—or just moving it somewhere else?

## The Uncomfortable Truth

Here's what I've come to realize: there may not be a perfect solution to the ticketing problem.

When demand massively exceeds supply, *someone* will be disappointed. The question is just who, and how we decide. Every system we design embeds certain values:

- Speed rewards the technologically advantaged
- Lotteries reward luck
- Pricing rewards wealth
- Fan verification rewards provable history
- Identity-based systems reward... having verifiable identity

The ticketing problem is ultimately a **resource allocation problem**, and resource allocation is inherently about tradeoffs.

The flash sale phenomenon adds another layer: sometimes the scarcity is manufactured. Companies know limited supply creates desire. They know their systems will fail. For some, the chaos is a feature, not a bug—it generates buzz, media coverage, and perceived exclusivity.

And even when companies genuinely want to build a fair, robust system, they're constrained by their dependencies. You can build the fastest ticketing system in the world, but if your payment provider buckles under load, none of it matters.

## Conclusion

Next time you're frustrated by a ticketing experience—whether it's for a concert, a pair of sneakers, a flight home for the holidays, or a table at that impossible-to-book restaurant—remember: behind that spinning loading icon is one of computing's genuinely hard problems. It involves distributed systems, human psychology, economic incentives, and fundamental questions about fairness.

The chain is only as strong as its weakest link. A great ticketing UI means nothing if the database can't handle concurrent writes. Perfect inventory management means nothing if the payment gateway times out. And all the technical solutions in the world mean nothing if the underlying scarcity is artificial.

That doesn't make the frustration any less real. But perhaps understanding the complexity can help us have better conversations about what we actually want from these systems.

Should tickets go to the fastest? The most dedicated fans? The highest bidders? The luckiest? The most identifiable? There's no objectively correct answer.

What I do know is this: the current state of ticketing often fails on all counts—not fast enough, not fair enough, not reliable enough. We can do better. The first step is understanding what we're really trying to solve.

---

## Let's Discuss

I'd love to hear your thoughts on this. What's your worst ticketing experience? Is a payment-first model something you'd be comfortable with? Do you have a better idea?

**Start a discussion**: Open an issue on [my GitHub repository](https://github.com/riyuner/portofolio/issues) and let's talk about it.

*This is meant to be a conversation, not a manifesto. I'm genuinely curious what approaches would feel fair to you.*
