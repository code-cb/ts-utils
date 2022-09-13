/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/782915b1b85bb8be5318a5f0fc473fe90fbf5236/sources/String/At.ts
 */

import { IsLiteral as IsNumLiteral } from '../number/Literal';
import { FirstImpl } from './First';
import { IsLiteral as IsStrLiteral } from './Literal';

type SkipImpl<
  Str extends string,
  Index extends number,
  Left extends string[] = [],
  Right extends string = Str,
> = Left['length'] extends Index
  ? Right
  : Str extends `${infer First}${infer Rest}`
  ? SkipImpl<Rest, Index, [...Left, First], Rest>
  : Right;

export type At<
  Str extends string,
  Index extends number,
> = IsStrLiteral<Str> extends false
  ? string
  : IsNumLiteral<Index> extends false
  ? string
  : FirstImpl<SkipImpl<Str, Index>>;
