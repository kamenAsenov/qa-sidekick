# Install QA Sidekick

## Get the skill

Clone the branch that contains the skill.

```sh
git clone --branch skill-foundation https://github.com/kamenAsenov/qa-sidekick.git
cd qa-sidekick
```

You can also [download the branch ZIP](https://github.com/kamenAsenov/qa-sidekick/archive/refs/heads/skill-foundation.zip) and extract it. Look for [`.agents/skills/qa-sidekick/`](../.agents/skills/qa-sidekick). Keep `SKILL.md` and the `references/` folder together. Show hidden files if your file manager hides folders that start with a dot.

## Local editors and terminals

If your client reads `.agents/skills/`, open this checkout as the project and use the skill there. To use it in another project, copy the entire `qa-sidekick` folder into the skill directory below. The result should be `<skill directory>/qa-sidekick/SKILL.md`.

| Client | Project skill directory | Start a task |
| --- | --- | --- |
| Codex CLI, desktop, or IDE extension | `.agents/skills/` | Select `$qa-sidekick` and add your task. Use `~/.agents/skills/` for all local projects. [Codex docs](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills) |
| Claude Code | `.claude/skills/` | Enter `/qa-sidekick` followed by your task. Use `~/.claude/skills/` for all local projects. [Claude Code docs](https://code.claude.com/docs/en/skills) |
| GitHub Copilot CLI | `.agents/skills/` | Check `/skills list`, then invoke `/qa-sidekick` with your task. [Copilot CLI docs](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) |
| GitHub Copilot in VS Code | `.github/skills/` for the Copilot harness | Open an agent session and ask it to use `qa-sidekick`. [VS Code docs](https://code.visualstudio.com/docs/agent-customization/agent-skills) |
| Gemini CLI | `.agents/skills/` or `.gemini/skills/` | Check `/skills list`, then ask Gemini to use `qa-sidekick`. [Gemini CLI docs](https://geminicli.com/docs/cli/skills/) |
| Google Antigravity | `.agents/skills/` | Use `/qa-sidekick` if available, or ask the agent to use `qa-sidekick`. [Antigravity docs](https://antigravity.google/docs/skills) |
| Cursor | `.agents/skills/` or `.cursor/skills/` | Find `qa-sidekick` in Agent chat's `/` menu. [Cursor docs](https://cursor.com/docs/skills) |
| OpenCode | `.agents/skills/` or `.opencode/skills/` | Ask the agent to load `qa-sidekick` and give it the task. [OpenCode docs](https://opencode.ai/docs/skills) |
| Cline | `.cline/skills/` | Check the Skills tab and ask Cline to use `qa-sidekick`. [Cline docs](https://docs.cline.bot/customization/skills) |

For Copilot cloud agent on GitHub.com, commit the folder under `.github/skills/` or `.agents/skills/` in the repository and branch used for the task. Start the cloud task in that repository and ask it to use `qa-sidekick`. For other Copilot surfaces, including Visual Studio and JetBrains, check your client version and the skill locations it supports. [GitHub Copilot docs](https://docs.github.com/en/copilot/concepts/customizations/agent-skills)

If the skill is missing, check the folder path and exact filename, then reopen the project or start a new session. In Gemini CLI you can run `/skills reload`. Use one copy per client to avoid loading an older copy with the same name.

For example, to set up Claude Code in this checkout on Windows, run the following in PowerShell. For an existing installation, replace the old `qa-sidekick` folder with the updated copy.

```powershell
New-Item -ItemType Directory -Force .claude/skills | Out-Null
Copy-Item -Recurse .agents/skills/qa-sidekick .claude/skills/
```

## Claude web, desktop, and Cowork

Make a ZIP containing the `qa-sidekick` folder. Run one command from the checkout root.

**PowerShell**

```powershell
Compress-Archive -Path .agents/skills/qa-sidekick -DestinationPath qa-sidekick.zip
```

**macOS or Linux with `zip` installed**

```sh
(cd .agents/skills && zip -r ../../qa-sidekick.zip qa-sidekick)
```

Confirm the ZIP contains `qa-sidekick/SKILL.md` and `qa-sidekick/references/`. In Claude, enable code execution and file creation if needed. Open **Customize > Skills**, choose **Create skill > Upload a skill**, and upload the ZIP. Enable the skill and ask Claude to use `qa-sidekick`. Cowork uses skills enabled on your Claude account. [Claude upload docs](https://support.claude.com/en/articles/12512180-use-skills-in-claude) · [Cowork and cloud docs](https://code.claude.com/docs/en/skills#use-skills-in-cowork-and-cloud-sessions)

## Gemini web

Open **Customize > Skills > Create > Upload**. Select the `qa-sidekick` folder or the ZIP from the previous section, review the imported instructions and references, then create the skill. In a chat, select it with `/` or `@`, depending on the shortcut your account shows. [Gemini Apps docs](https://support.google.com/gemini/answer/17094296)

## Any chat or API

For a client with no skill loader, paste the body of [`SKILL.md`](../.agents/skills/qa-sidekick/SKILL.md) into the chat or its reusable instructions. Add the contents of the reference that fits the task: [QA workflow](../.agents/skills/qa-sidekick/references/qa-workflow.md) or [functional automation](../.agents/skills/qa-sidekick/references/functional-automation.md). In an API integration you control, put these in the provider's system or developer instruction field. Send the ticket, logs, or test evidence separately as task input. File access and test execution depend on the tools the client has.

## Check the setup

First confirm the skill appears in your client's menu or list, where available. Then try this prompt after selecting it.

> The requirement accepts users aged 18 and older. Build 2.4 rejects age 18. Give the expected results at ages 17, 18, and 19 and report the build mismatch.

Expect rejection at 17 and acceptance at 18 and 19, assuming all other inputs are valid. The mismatch is the observed rejection at 18. This checks the response. Use the client's skill list or trace to confirm loading.
