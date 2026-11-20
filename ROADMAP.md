# Roadmap

## Verification

[Release trials](docs/behavior-review.md#release-trials) cover local Codex discovery, a manual test plan, and a generated test against the cart fixture. The next checks require model access.

- Run the [CLI scenario catalog](README.md#run-the-checks) and review each reply against its criteria.
- Check automatic selection on a QA task and on an unrelated request. Use client events to confirm whether the skill loaded.
- Repeat the [profile demo](docs/demo.md) in Claude, Gemini, and Copilot after installing the skill.

## Distribution

- Choose a license before describing QA Sidekick as open source.
- Package the skill as a plugin if users need installation through a plugin directory.
