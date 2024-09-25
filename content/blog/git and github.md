---
external: false
title: "Learn Git/Github"
description: your guide to learn git & github in 1day
date: 2024-09-25
---

pwd => print working dir
ls => list files in dir 
cd <name_of_dir> => move to the dir 
###### Make sure you're changed into your project folder before running this:
git init
git remote add origin https://github.com/username/recipe-app.git
git branch -M main
###### Git Workflow 🔄
git status # before staging
git add .
git commit -m "Initial Commit"
git status # after staging
###### Local Push 🫸🏼
git push -u origin main
###### Git Clone ©
git clone https://github.com/your-github-username/github-chapter-2-sandbox.git
###### Branch Out 🌿
- **Method 1**
git branch name-of-new-branch
git checkout name-of-new-branch
- **Method 2**
git checkout -b name-of-new-branch
###### Git & Teams 🧑‍🤝‍🧑
git checkout main
git pull
**Alternatively** : git pull origin main
###### Merges ⛙
git checkout your-github-username/edit
git merge main

###### Pull Requests ↩️
**Confirm you're on the `main` branch**
git branch
**Switch into your fork's edit branch**
git checkout your-github-username/edit
**Stage, commit, and push all changes to equivalent branch on remote repo**
git add .
commit -m "message here"
git push -u origin your-github-username/edit

**At this point, go to https://github.com/your-github-username/github-chapter-2-sandbox/tree/your-github-username/edit to open and merge a pull request

#### Write Useful Commit : 
- [How to Write Useful Commit Messages (My Commit Message Template)](https://dev.to/jacobherrington/how-to-write-useful-commit-messages-my-commit-message-template-20n9)
