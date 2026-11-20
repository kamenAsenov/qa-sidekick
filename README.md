# QA Sidekick

QA Sidekick helps software testers do the QA work in front of them. Describe a task in plain language and get help with the next decision, a practical test plan, test cases, functional test code, a defect report, or a release status update.

The project starts as a Codex skill for QA practitioners at any experience level, with particular care for people who are new to QA or AI. It uses established testing practices and adapts to the team's tools, templates, and evidence.

## Try it in Codex

Open this repository from the branch containing the skill. In a Codex client that supports local skills, select `$qa-sidekick` and describe your own task. From the repository root, Codex looks for repository skills under `.agents/skills`. To reuse it in another project, copy the complete skill directory into that project's `.agents/skills` directory. [Codex skill documentation](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills)

For example, use the instruction that fits the work you already have.

- “I have 20 minutes for this ticket. Read the acceptance criteria and tell me what to check first.”
- “Review these cases for gaps. Keep the team's format and flag any assumptions.”
- “Write a functional test using the fixtures and conventions in this repo. Tell me whether it ran.”
- “Turn my observations into a Jira draft in English. Mark what still needs confirmation.”

Use approved work materials or synthetic examples when trying it.

## Review CLI responses

With Node.js and Codex CLI installed and signed in, run `node validation/run-cli-checks.mjs` for four smoke scenarios, or add `--all` for the full set. Use `--all --dry-run` to list scenarios without sending requests. Results go into a new directory under `.qa-results`; the runner refuses to overwrite existing evidence. A captured response still needs review against its accompanying criteria, and does not by itself prove skill activation.

Run `node --test validation/result-files.test.mjs` to check the result-file protection.

## Project files

- [Skill and references](.agents/skills/qa-sidekick/SKILL.md)
- [Behavior review](docs/behavior-review.md)
- [Roadmap](ROADMAP.md)
