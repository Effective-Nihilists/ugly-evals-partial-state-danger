import { compact, normalize } from './a.js';

export function processOne(s: string): string {
  return compact([normalize(s)])[0] ?? '';
}
