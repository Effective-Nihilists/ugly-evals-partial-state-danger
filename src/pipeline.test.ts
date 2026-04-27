import { describe, expect, it } from 'vitest';
import { processOne } from './consumer.js';
import { dedupeNormalized, runOnce } from './runner.js';

describe('pipeline', () => {
  it('normalizes, compacts, dedupes', () => {
    expect(runOnce(['Hello', '  hello  ', '', 'WORLD'])).toEqual([
      'hello',
      'world',
    ]);
  });

  it('dedupeNormalized strips duplicates after normalize', () => {
    expect(dedupeNormalized(['A', ' a ', 'B'])).toEqual(['a', 'b']);
  });

  it('processOne normalizes and returns non-empty', () => {
    expect(processOne('  HELLO  ')).toBe('hello');
  });
});
