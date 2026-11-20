# Initial behavior review

We tried 30 independent QA scenarios and repeated the four requests that exposed issues. Separate agents explicitly loaded the skill and the applicable references. Review criteria were whether the response did the requested work, preserved evidence, and proposed a check that could validate the required behavior.

| Area | Clean first responses | Representative checks |
| --- | ---: | --- |
| Planning and design | 9/10 | Ambiguous wording, time limits, blocked data, conflicting build and spec, boundary values, decision tables, exploratory charters, coverage and team templates |
| Automation, API, and SQL | 9/10 | Playwright, Cypress, pytest, persistence, API contracts, read-only SQL, missing schema, flaky results, and missing execution access |
| Execution, defects, and status | 8/10 | Observed defects, unknown expected behavior, release risk, unsupported root cause, translation, retest status, and a multi-turn handoff |

| Initial issue | Change and repeat result |
| --- | --- |
| An icon change was assumed to open a panel | Check the actual change and established behavior. The repeated response avoided assuming a panel. |
| A suggested Jira expectation was treated as confirmed | Mark an unsupported expectation as needing confirmation. The repeated response did so. |
| A draft inferred the cause of an earlier blocker | Preserve the stated facts. On repeat, the agent removed the assumed cause but initially called the earlier check a retest. It then corrected its answer. The final timeline clarification still needs an independent retry. |
| A Cypress persistence check could pass if the name was already the expected value | Add a distinct starting value as setup or a precondition. The repeated response asserted it before saving. |

These probes reviewed assistant responses and generated code as text. They did not verify automatic skill discovery or execute the generated tests against software.

## Executable regression check

The [cart test](../validation/cart.test.mjs) makes three requests to an in-process fixture. It reads a cart at 10,000 cents, applies a promo, and reads the cart again to verify 9,000 cents. The simulated regression still reports a successful promo request while leaving the subtotal unchanged.

Using Node 24, run from the repository root:

```sh
node --test validation/cart.test.mjs
```

To simulate the regression in Bash:

```sh
QA_SIDEKICK_MUTATE=1 node --test validation/cart.test.mjs
```

In PowerShell:

```powershell
$env:QA_SIDEKICK_MUTATE = '1'
node --test validation/cart.test.mjs
Remove-Item Env:QA_SIDEKICK_MUTATE
```

The normal run passed. The simulated regression failed at the subtotal assertion with actual `10000` and expected `9000`. The requests use the standard `Request` and `Response` objects. No external service, browser, or TCP transport was exercised.
