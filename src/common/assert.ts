/**
 * References:
 * - https://github.com/garronej/tsafe/blob/144d974f3ac91dab1c9e25ddc8c93bdba57df3d1/src/assert.ts
 * - https://github.com/dsherret/conditional-type-checks/blob/b1fbcd26068c613b5bc37dac89f2c7e7f28d8c4b/mod.ts#L21
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

export type ExpectFalse<_Condition extends false> = never;

export type ExpectTrue<_Condition extends true> = never;

export type Expect<
  Condition extends true | false,
  _Expected extends Condition,
> = never;

export const cases = <_Cases extends never[]>() => {};
