---
name: git-commit-workflow
description: >-
  Guidelines and strict discipline for inspecting repository changes, validating branch safety, organizing atomic changes, splitting commits, and generating Conventional Commits. Commits must NEVER be executed autonomously; a human engineer must explicitly request the commit.
---

# Git Commit Workflow & Safety Standards

This skill establishes the repository discipline for creating high-quality, reviewable, atomic, and safe Git commits in the **Agenda Fácil** repository.

---

## 1. Golden Rule: Explicit Human Request Required

> **MANDATORY INVARIANT:** AI agents MUST NEVER run `git commit` autonomously, automatically, or proactively. A commit must ONLY be executed when a human user explicitly requests it (e.g., *"faça um commit"*, *"commit these changes"*, *"please commit"*).
>
> Even after completing modifications, tests, or documentation, the agent must leave changes unstaged or staged in the working tree and present the results to the user. Never commit without direct human authorization.

---

## 2. Commit Philosophy

Every commit should:
- Represent **one logical change**.
- Be easy to review in isolation.
- Be easy to revert without cascading breakage.
- Communicate intent clearly to future maintainers.

### Prefer:
- Small, focused diffs.
- Clear separation of concerns.
- Explicit and intentional staging (`git add <file>`).

### Avoid:
- Monolithic commits bundling multiple unrelated changes.
- Mixing refactorings, formatting fixes, and features together.
- Vague commit messages (`WIP`, `fixes`, `update code`).
- Running `git add .` or `git add -A` blindly.

---

## 3. Protected Branch Rules

> **SAFETY INVARIANT:** Never commit directly to protected branches.

Protected branches include:
- `main`
- `production`

### If currently on a protected branch:
1. **HALT immediately.** Do not stage or commit files.
2. Warn the user clearly.
3. Suggest creating a feature, chore, or bugfix branch:
   ```bash
   git checkout -b <type>/<descriptive-name>
   ```

---

## 4. Inspection Workflow Before Staging

Before preparing any commit, systematically run:
```bash
# 1. Verify current branch
git branch --show-current

# 2. Check full repository status
git status

# 3. Inspect unstaged and staged changes
git diff
git diff --staged
```

Verify that:
- No temporary scratch files, credentials, secrets, or logs are tracked.
- No files from `_TEMP/` are staged.

---

## 5. Conventional Commits Standard

All commit messages must follow the Conventional Commits specification:

```
<type>(<scope>): <short imperative description>

[optional body explaining motivation and context]

[optional footer(s)]
```

### Types:
- `feat`: A new feature for the user (e.g., `feat(schedules): add weekly calendar grid with 30-min slots`)
- `fix`: A bug fix (e.g., `fix(events): broadcast real-time updates after transaction commit`)
- `refactor`: Code change that neither fixes a bug nor adds a feature (e.g., `refactor(auth): port password handler to bcrypt concern`)
- `test`: Adding or correcting tests (e.g., `test(schedules): add system tests for guest invitation`)
- `chore`: Maintenance tasks, dependencies, configs (e.g., `chore(gems): upgrade solid_cable to 3.0`)
- `docs`: Documentation updates (e.g., `docs(readme): document mobile webview bridge catalog`)

### Scopes:
- `schedules`, `events`, `guests`, `auth`, `notifications`, `mobile`, `bridge`, `admin`, `db`
