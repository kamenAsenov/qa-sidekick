# Roadmap

## 1. Establish the skill baseline

- Support real QA work from an unclear ticket through planning, design, automation, execution, defect reporting, and release status.
- Keep the skill concise and link to practical references for QA workflow and functional test automation.
- Keep a behavior review record with the scope, observed failures, and repeat checks.

## 2. Verify the experience in Codex

- Open a clean checkout and confirm Codex discovers the skill and can invoke it explicitly.
- Try implicit selection on relevant QA requests and check an unrelated prompt for unwanted activation.
- The [in-process cart regression check](docs/behavior-review.md#executable-regression-check) passes on the baseline and catches the simulated fault. Try a test generated in a new Codex session against a running application next.
- Recheck handling of unconfirmed requirements, status changes, and team templates in both Bulgarian and English.

## 3. Prepare for public distribution

- Publish a small set of copyable requests organized by work stage and include setup for reuse in other projects.
- Decide the license with the repository owner before calling a release open source.
- Evaluate plugin packaging after the repo-scoped skill is verified.

Prioritize improvements from observed QA work and reproducible failures. The product should help the user complete their own work at whichever stage they start.
