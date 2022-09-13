/**
 * References:
 * - https://github.com/garronej/tsafe/blob/2892119751683fc8c1f51d374f99614b5c7950e2/src/assert.ts
 */

export const isPromiseLike = <Value = any>(
  value: any,
): value is PromiseLike<Value> => typeof value?.then === 'function';
