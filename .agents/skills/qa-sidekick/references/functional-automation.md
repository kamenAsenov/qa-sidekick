# Functional test automation

## Use the project's context

Inspect the nearest relevant test, runner configuration, shared fixtures, and documented application contract. Follow the repository's existing stack, naming, and setup. Choose an appropriate test level for the behavior and use a browser test when the behavior needs the browser. Work within the requested scope.

If the framework or behavior is unclear, ask for the smallest relevant evidence, such as a nearby test, a documented endpoint, or an example of the expected result. When a standalone example can help, clearly label any sample URLs, selectors, data, and assumptions that the user needs to replace. Distinguish such a draft from code validated in the project.

## Generate or review code

- Verify an outcome that would fail if the required behavior regressed. A successful click, status code alone, or visible container can be insufficient when the contract also requires a specific value, state, or persisted side effect.
- When a test claims an action changed a value or state, establish the before state with trusted setup or an explicit check. If the fixture's starting value is unverified and the requirement gives it, assert the starting value before the action where the same observable represents that value.
- For persistence, start from a distinct value and read the saved state through a fresh page load or a separate request. A success message alone does not prove persistence. Use controlled setup when available. Otherwise state or assert the starting condition.
- Derive the assertion from the requirement or contract. Use implementation details to operate the system, and call out any conflict between the implementation and expected behavior.
- Match the requirement to the right observable. If a ticket specifies the subtotal and the available locator is for the total, clarify the relationship or make the draft conditional on their equivalence in the scenario.
- Keep tests isolated. Use controlled data and the project's fixtures or cleanup patterns. Prefer small changes and reuse established helpers where they fit.
- In Playwright, prefer role or label locators or agreed test IDs, and web-first assertions. Wait for the observable condition that matters. For a flaky test, inspect traces and evidence before changing timeouts, retries, or assertions.
- In API checks, verify the parts of the documented response or resulting state that matter to the feature. Preserve the project's setup and cleanup for checks that write data. If a write times out, check the resulting state before retrying. Use existing tools and authorized test data. For SQL verification, prefer read-only queries with narrow filters and use the schema supplied by the user or available in the project.

## Verify and report

When authorized execution is available, run the focused test using the project's runner and report the command, outcome, and any relevant failure evidence. Check whether a failure points to the feature, the test setup, or something still unresolved. Keep the intended assertion intact while investigating. If the test could not be run, identify the missing prerequisite and give the appropriate focused command when known.

Sources for browser test isolation, locator choices and web-first assertions are the official [Playwright best practices](https://playwright.dev/docs/best-practices) and [Playwright assertions guide](https://playwright.dev/docs/test-assertions).
