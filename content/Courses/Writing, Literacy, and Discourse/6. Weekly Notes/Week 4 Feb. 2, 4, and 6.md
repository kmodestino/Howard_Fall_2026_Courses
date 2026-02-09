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

3. **Writing as Power:** If coding is writing, then **critiquing code** is a form of essential literacy for the 21st century


# Feb 4:

## Introduction to Midterm Assignment 

[[9. Midterm Assignment]]

## Discussion of Center for Democracy and Technology Report on AI in Schools 

Link [Hand in Hand: Schools’ Embrace of AI Connected to Increased Risks to Students](https://cdt.org/insights/hand-in-hand-schools-embrace-of-ai-connected-to-increased-risks-to-students/)


# Feb 6th Writing Lab.
## Your Algorithmic Proxy 

### Overview

Ruha Benjamin argues that algorithms are not neutral; they are "coded reflections" of social priorities. In this lab, you will reflect on your own digital algorithmic environment. Your goal is to move from a **consumer** of content to an **observer** of the system that predicts you.

---
### Step 1: The Prediction Log (~15 Minutes)

Open your most-used algorithmic feed (TikTok, Instagram, YouTube, or Spotify). Document the first **five** items presented to you. For each item, record:

1. **The Content:** A brief description of the video/post/song.
    
2. What data breadcrumb did you leave behind that you think led the machine here? (e.g., a specific search, a long pause on a previous video, your GPS location).
### Step 2: Defining your "Algorithmic Proxy" (15 Minutes)

Benjamin discusses how data systems use "proxies" to categorize us. Based **only** on those five items, answer the following:

-  If a stranger saw only this feed, what "User Category" would they assign you? (Give this category a name, e.g., "The Doomsday Prepper," "The Fast-Fashion Consumer," "The Corporate Striver").
-
- Identify one significant part of your identity, hobby, or value system that is **entirely missing** from this feed. Why might this part of you be invisible to the algorithm’s profit model?

-  Look at an item in your feed that feels wrong or like a stereotype. Is it a mistake, or does it reveal an assumption the developers made?
---

### Submission Requirements

Submit a 250-word summary including:

1. **Your Data Log:** The 5 items and your proxy category name.
2. **Analysis:** Describe the part of you the machine misses or gets wrong and why that silence or assumption in the data matters.