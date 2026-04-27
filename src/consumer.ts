import { compact, normalize } from './b.js';

export function processOne(s: string): string {
  return compact([normalize(s)])[0] ?? '';
}
