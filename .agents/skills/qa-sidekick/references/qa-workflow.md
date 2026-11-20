# QA workflow

## Review the ticket

Extract the change, affected users or flows, expected outcomes, and existing constraints. Identify the source of each important requirement when available. Resolve ambiguity that changes the outcome or priority first. Give the user a concrete question they can send to the team if the answer is outside their knowledge.

## Plan by risk

Prioritize by likely failure and impact on the user or business. Consider affected integrations, data changes, and adjacent workflows. State what is in scope, what is deferred, and why. Identify the environment, data, or dependency that could block a meaningful check. If time is limited, put the checks most likely to change the decision first and name the main remaining risk.

A strategy explains the approach and tradeoffs. A plan lists the scope, checks, dependencies, and decision criteria.

For a narrow visual change, check the change itself and any relevant existing behavior. When prior behavior or the design is unavailable, state what to compare or verify conditionally. For example, an icon change alone does not establish that the control opens a panel.

## Design and prepare checks

- Use equivalence partitions for inputs with the same expected behavior and boundary values where thresholds matter.
- Use a decision table for interacting business rules and state transitions for workflows whose result depends on earlier actions.
- Use a focused exploratory charter for uncertain behavior. Include the goal, the part of the product to explore, and evidence to capture.
- Choose cases that cover meaningfully different behavior or risk. For a repeatable case, include the goal, preconditions and relevant data, steps, and an observable expected outcome. Link the requirement or risk when it helps the reader understand the purpose of the case.
- For a coverage review, identify uncovered requirements or risks, weak expected results, and redundant cases. Explain what you would add, change, or remove and why.

## Execute and investigate

Capture environment and build, case or charter, relevant data conditions, and actual observations. Use the team's statuses. If the team has no convention, distinguish passed, failed, blocked, and not run. Compare plausible causes in the product, test, environment, and data. Suggest the quickest check that distinguishes the leading explanations.

When a request can change state and its response is inconclusive, report the response and the resulting state separately. For example, after an order request times out, look up the original attempt by request ID or another reliable key before retrying. If lookup is unavailable, keep the outcome unknown and identify the evidence or documented idempotency guarantee needed before retrying.

Draft defect reports with a specific title, environment and version if known, prerequisites, steps or observed trigger, expected result and its source when available, actual result, and relevant evidence. Include frequency or impact when supported. Mark unknown details and keep root cause as a hypothesis until corroborated.

If the expected result lacks a source, mark it “to confirm” and distinguish a suggested expectation from an agreed requirement. In comments and handoffs, report a blocker and a later change as separate facts unless their causal link is known. Preserve which action happened and which is still pending. Call an earlier check a retest only when the notes establish that it was a retest.

## Close or hand off

Summarize what was tested and where, the results and their evidence, unresolved defects or blockers, deferred scope, and remaining risk. For a release question, tie any recommendation to the agreed criteria or state which criteria still need an owner or decision.

If a required check is blocked or not run, identify the unmet release criterion and what would provide evidence for it. If the team has a waiver process, surface the unresolved risk and the decision owner and record whether a waiver was actually granted.

Sources for test activities, test techniques, prioritization, product risk and defect management are in sections 1.4 and chapters 4 and 5 of the [ISTQB CTFL v4.0.1 syllabus](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf).
