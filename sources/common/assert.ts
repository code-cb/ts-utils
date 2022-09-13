/**
 * References:
 * - https://github.com/garronej/tsafe/blob/144d974f3ac91dab1c9e25ddc8c93bdba57df3d1/src/assert.ts
 */

export class AssertionError extends Error {
  constructor(message?: string) {
    super(`Wrong assertion: ${message ? `: "${message}"` : ''}`);
  }
}

export function assert<_Condition extends true>(
  condition: boolean = true,
  message?: string,
): asserts condition {
  if (!condition) throw new AssertionError(message);
}
