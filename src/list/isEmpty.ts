/**
 * References:
 * - https://github.com/sindresorhus/ts-extras/blob/87c2c0d2a377e568a5daa633c5c23b9f5a84c14c/source/is-empty.ts
 */

import { IsLiteral } from './Literal';

export type IsEmpty<
  List extends readonly any[],
  WhenTrue = true,
  WhenFalse = false,
> =
  IsLiteral<List> extends false
    ? WhenTrue | WhenFalse
    : List['length'] extends 0
      ? WhenTrue
      : WhenFalse;

export function isEmpty(list: any[]): list is [];
export function isEmpty(list: readonly any[]): list is readonly [];
export function isEmpty(list: readonly any[]) {
  return list.length === 0;
}
