import { normalize, compact, dedupe } from './b.js';
export { normalize, compact, dedupe };

export function pipeline(input: string[]): string[] {
  return dedupe(compact(input.map(normalize)));
}