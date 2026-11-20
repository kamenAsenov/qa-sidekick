import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Preserve previous evidence and never count an old answer as a new response.
export function assertResultsAvailable(output, selected) {
  for (const { id } of selected) {
    for (const suffix of ['answer.txt', 'events.jsonl', 'stderr.txt', 'review.txt']) {
      const path = join(output, `${id}.${suffix}`);
      if (existsSync(path)) throw new Error(`Result already exists: ${path}. Choose a new --out directory.`);
    }
  }
}
