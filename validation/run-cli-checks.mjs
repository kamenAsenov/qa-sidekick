import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { assertResultsAvailable } from './result-files.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const cases = JSON.parse(readFileSync(new URL('./cli-cases.json', import.meta.url), 'utf8'));
const { values } = parseArgs({
  options: {
    all: { type: 'boolean' },
    case: { type: 'string' },
    'dry-run': { type: 'boolean' },
    out: { type: 'string' },
  },
});
if (values.all && values.case) throw new Error('Choose --all or --case.');

const selected = values.case
  ? cases.filter(({ id }) => id === values.case.toUpperCase())
  : values.all ? cases : cases.filter(({ group }) => group === 'smoke');
if (!selected.length) throw new Error(`Unknown case: ${values.case}`);

if (values['dry-run']) {
  for (const { id, group, mode } of selected) console.log(`${id}  ${group}  ${mode}`);
  process.exit(0);
}

const stamp = new Date().toISOString().replaceAll(':', '-');
const output = resolve(values.out ?? join(root, '.qa-results', stamp));
mkdirSync(output, { recursive: true });

assertResultsAvailable(output, selected);

for (const testCase of selected) {
  const { id, mode, prompt, expectation } = testCase;
  const answer = join(output, `${id}.answer.txt`);
  const input = mode === 'explicit' ? `$qa-sidekick ${prompt}` : prompt;
  const run = spawnSync('codex', [
    'exec', '--ephemeral', '--json', '--sandbox', 'read-only',
    '--skip-git-repo-check', '--cd', root, '--output-last-message', answer, input,
  ], { cwd: root, encoding: 'utf8', timeout: 120_000, maxBuffer: 8 * 1024 * 1024 });
  const answered = existsSync(answer) && Boolean(readFileSync(answer, 'utf8').trim());
  const completed = !run.error && run.status === 0 && answered;

  writeFileSync(join(output, `${id}.events.jsonl`), run.stdout ?? '');
  writeFileSync(join(output, `${id}.stderr.txt`), run.stderr ?? '');
  writeFileSync(join(output, `${id}.review.txt`),
    `Prompt: ${input}\nExpected: ${expectation}\nExecution: ${completed ? 'completed; review the answer' : 'failed; see stderr and events'}\n`
    + (run.error ? `Runner error: ${run.error.message}\n` : ''));

  console.log(`${id}: ${completed ? 'response captured' : 'execution failed'}`);
  if (!completed) {
    process.exitCode = 1;
    break;
  }
}
console.log(`Results: ${output}`);
