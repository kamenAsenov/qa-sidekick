<p align="center">
  <img src="assets/qa-sidekick-gigachad.png" width="220" alt="QA Sidekick, a muscular tester holding a magnifying glass over a software bug">
</p>

<h1 align="center">QA Sidekick</h1>

A Codex skill for reviewing requirements, planning tests, writing functional checks, and reporting bugs or release status.

## Install

[Setup for Codex, Claude, GitHub Copilot, Gemini, and other clients](docs/install.md). In Codex, open this checkout, select `$qa-sidekick`, and add your task.

## Example prompts

- I have 20 minutes to test this ticket. Which checks come first?
- Review these test cases for gaps. Keep our format.
- Write a functional test with this repo's fixtures. Run it if you can and report the result.
- Turn these notes into a Jira draft in English. Flag anything I still need to confirm.

## Run the checks

Use Node.js 24 and sign in to Codex CLI before collecting responses.

```sh
node validation/run-cli-checks.mjs                 # Four smoke scenarios
node validation/run-cli-checks.mjs --all --dry-run  # List scenarios without sending requests
node validation/run-cli-checks.mjs --all            # Collect responses for all 30 scenarios
node --test validation/cart.test.mjs validation/result-files.test.mjs
```

Review each response against its criteria in `.qa-results`. Use client events to verify skill activation when they are available.

## Project files

- [Skill and references](.agents/skills/qa-sidekick/SKILL.md)
- [Behavior review](docs/behavior-review.md)
- [Roadmap](ROADMAP.md)
