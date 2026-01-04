# Technical Lifeline

**Technical Lifeline** is a beginner-friendly web app that helps programmers figure out what to do *when they’re stuck and don’t know what to search on Google*. It provides guided troubleshooting for common coding issues as well as  **Git and GitHub mistakes** that frequently block beginners during hackathons and personal projects.

---

## Inspiration

As a developer and first-time hackathon participant, I often ran into situations where:

* Git refused to let me make my first commit
* Nothing showed up on GitHub after pushing
* My code didn’t work, but I didn’t know *how to describe the problem*

Most resources or tutorials are taught or shown in a way that assume you already know what to search for. **Technical Lifeline** was created to bridge that gap, to help developers ask the *right questions* and take their *next step* with confidence.

---

## What It Does

Technical Lifeline guides users through a simple decision tree:

* Identify the *type* of problem they’re facing
* Narrow it down through guided questions
* Provide clear explanations, next steps, and search terms

### Two Main Paths

* **General Coding Help** — for when your program is broken or behaving unexpectedly
* **Git & GitHub Help** — for common Git mistakes like failed commits or missing repositories

---

## Decision Tree Design

### Entry Point

**“I’m stuck. What’s going wrong?”**

---

### Path 1: General Coding Help

**1. What’s happening?**

*  I see an error message
*  My code runs, but the output is wrong
*  My code won’t run at all
*  I’m not sure what broke

**2. What language are you using?**

* Java
* JavaScript
* C#

**3. Output Provided**

* Plain-English explanation of what this usually means
* Common causes
* What to check first
* Suggested Google search phrases

---

### Path 2: Git & GitHub Helper

**1. What Git problem are you facing?**

*  Git won’t let me commit
*  Nothing appears on GitHub
*  I’m confused about remotes / origin
*  I don’t know what Git wants me to do

**2. Guided Explanation Includes**

* What Git is expecting
* Why this problem happens
* Step-by-step commands to try
* What success looks like
* Common beginner misconceptions

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Logic:** JavaScript decision trees
* **Hosting:** GitHub Pages

No backend or external APIs required.

---

##  Example Git Scenario

**Problem:** “Git won’t let me commit”

**Explanation:**
Git requires at least one commit before it can track your project history. You may also have files that haven’t been staged yet.

**Suggested Commands:**

```
git status
git add .
git commit -m "Initial commit"
git push -u origin main
```

**What Success Looks Like:**

* Git reports a successful commit
* Your repository appears on GitHub with files visible

---

##  Why This Matters

Technical Lifeline empowers beginners by:

* Reducing frustration and imposter syndrome
* Teaching *how* to think through problems
* Making Git and debugging less intimidating

Rather than fixing issues automatically, the app helps users **learn how to get unstuck on their own**.

---

##  Hackathon Scope

* Built solo over a 2-day beginner-friendly hackathon
* Focused on clarity, usability, and empowerment
* Designed to be expandable in future versions

---

##  Future Improvements

* More Git scenarios (merge conflicts, branches)
* Additional languages and frameworks
* Save user progress
* Interactive command simulations

