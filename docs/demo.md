# Test a profile update in 15 minutes

After selecting QA Sidekick, paste this prompt. It uses a sample ticket.

> I have 15 minutes on staging build 32 and an approved test account. AC1: a new profile name persists after reload. AC2: an empty name is rejected and the last saved value stays. AC3: the maximum is 40 characters. The product owner mentioned 50 in chat, but hasn't confirmed a ticket change. Yesterday the UI displayed Saved once. We didn't reload. Give me a short test plan and a status update based on the evidence so far.

## Plan from the trial

| Time | Check | Expected result or evidence to capture |
| --- | --- | --- |
| 5 min | Record the original name. Save a different valid name and reload. | The new name remains after reload. |
| 4 min | Try saving an empty name, then reload. | The empty name is rejected and the last saved value remains. |
| 4 min | Try names of 40 and 41 characters. Record what happens at input, save, and reload. | Under the ticket, 40 is allowed and 41 should not persist unchanged. Record whether the UI blocks, rejects, or trims it. Ask the product owner to confirm the limit. |
| 2 min | Record build, input, and outcome. Restore the account's original name. | Each result is tied to the case and build. |

**Status before testing.** Yesterday the UI displayed `Saved` once. The build was unspecified, and persistence remains unverified. The build 32 checks are `Not run`.

This plan is adapted from a Bulgarian trial. No profile app was tested. For a test that was executed against software, see the [cart regression trial](behavior-review.md#release-trials).
