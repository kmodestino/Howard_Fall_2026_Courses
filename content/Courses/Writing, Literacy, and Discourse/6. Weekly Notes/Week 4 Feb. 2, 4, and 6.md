---
title: Week 4 Feb. 2, 4, and 6
publish: true
---
# Monday Slide Deck
## Race After Technology: Chapters 1–4

## What is the "New Jim Code"?


> "The employment of new technologies that reflect and reproduce existing hierarchies... even as they are often promoted and perceived as more objective or progressive."

> — Ruha Benjamin (p. 5)


**The Reality Check:**

* It isn't just about "racist people."

* It’s about **racist systems** being automated.

* Tech launders bias: it makes it look like math instead of prejudice.

## Chapter 1: Engineered Inequity

### The Myth of Neutrality

* **Core Argument:** We treat tech as a fix for human messiness and inefficiency

* **But we Have to Pause:** If you build a high-speed train that only stops in wealthy neighborhoods, the *train* isn't neutral—the *map* it follows is biased.

* **Discussion:** Why do we trust a computer’s "score" more than a human's story?

## Chapter 2: The Logic of the "Glitch"

### A Glitch is a Signal, Not a Mistake

* **Benjamin's Argument:** A glitch reveals who the system was designed for and who was ignored (p. 77).

* **The Default:** Who is the "Standard User" in the designer's mind?

* **Reality Check:** * If a soap dispenser doesn't "see" dark skin, it’s not a "broken" sensor.

  * It is a sensor performing exactly as it was taught—on a white "default" body.

## Chapter 3: Coded Exposure

### The Trap of "Being Seen"

* **The Shirley Card:** Historically, film was calibrated using a white woman's skin tone as the "standard" (Benjamin, 2019, p. 112).

* **The Reality Check:** For many, "inclusion" is not the goal—it is a trap.

* **The Counter-Argument:** If we "fix" facial recognition to see Black faces perfectly, does that help Black people, or does it just make it easier for the state to monitor them?

* **Key Concept:** Visibility $\neq$ Justice.
## Chapter 4: Technological Benevolence

* **Technobenevolence:** Tech that *claims* to "help" or "diversify" while actually extracting data or controlling people.

* **Workday & Howard:** Howard University uses Workday; our leadership sits on their board.

* **Reality Check:** Workday markets AI as "removing human bias." But if the AI is trained on "standard" corporate data, it may treat some degrees as outliers or risks.

* **Discussion:** Is bias-free tech possible if the world it's built in is still unequal?
### Reading Code:

```python

# A plausible logic for an automated resume scan (ATS)

def evaluate_candidate(data):

    # 1. Geographic Filter (Legal, but reflects Redlining)

    if data['miles_from_office'] > 20:

        return "Low Priority"

  

    # 2. Employment Gap (The Default of constant work)

    # Punishes caregivers and those with economic instability

    if data['unemployed_more_than_6_months'] == True:

        return "Reject"

  

    # 3. Pedigree Filter (Reflects class privilege)

    if data['college'] not in target_school_list:

        score -= 20

```

## Discussion: Authorship & Accountability

  

1. **Authorship:** If Workday's "Predictive Analytics" flags a student worker as a retention risk based on their zip code, who is the author of that decision?

2. **The Default:** How do we interrogate the default settings of the software we use every day on campus?

3. **Writing as Power:** If coding is writing, then **critiquing code** is a form of essential literacy for the 21st century.