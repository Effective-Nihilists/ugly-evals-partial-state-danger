import { compact, dedupe, normalize } from './b.js';

export function pipeline(input: string[]): string[] {
  return dedupe(compact(input.map(normalize)));
}
