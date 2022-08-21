/**
 * References:
 * - https://github.com/sindresorhus/ts-extras/blob/87c2c0d2a377e568a5daa633c5c23b9f5a84c14c/source/is-empty.ts
 */

export function isEmpty(list: Array<unknown>): list is [];
export function isEmpty(list: ReadonlyArray<unknown>): list is readonly [];
export function isEmpty(list: ReadonlyArray<unknown>) {
  return list.length === 0;
}
