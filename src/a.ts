export function normalize(s: string): string {
  return s.trim().toLowerCase();
}

export function compact(arr: string[]): string[] {
  return arr.filter((x) => x.length > 0);
}

export function dedupe(arr: string[]): string[] {
  return Array.from(new Set(arr));
}

export function pipeline(input: string[]): string[] {
  return dedupe(compact(input.map(normalize)));
}
