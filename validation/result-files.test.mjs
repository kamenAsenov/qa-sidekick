import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { assertResultsAvailable } from './result-files.mjs';

test('existing evidence blocks a run and remains unchanged', () => {
  const output = mkdtempSync(join(tmpdir(), 'qa-results-'));
  try {
    assert.doesNotThrow(() => assertResultsAvailable(output, [{ id: 'S01' }]));
    for (const suffix of ['answer.txt', 'events.jsonl', 'stderr.txt', 'review.txt']) {
      const file = join(output, `S01.${suffix}`);
      writeFileSync(file, 'previous evidence');
      assert.throws(() => assertResultsAvailable(output, [{ id: 'S01' }]), /Result already exists/);
      assert.equal(readFileSync(file, 'utf8'), 'previous evidence');
      rmSync(file);
    }
  } finally {
    rmSync(output, { recursive: true, force: true });
  }
});
