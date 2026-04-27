import { pipeline } from './a.js';
import { dedupe, normalize } from './b.js';

export function runOnce(inputs: string[]): string[] {
  return pipeline(inputs);
}

export function dedupeNormalized(inputs: string[]): string[] {
  return dedupe(inputs.map(normalize));
}
