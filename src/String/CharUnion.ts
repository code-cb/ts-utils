/**
 * References:
 * - https://github.com/type-challenges/type-challenges/issues/11801#issue-1275043645
 */

import { IsLiteral } from './Literal';

type CharUnionImpl<
  Str extends string,
  AccUnion = never,
> = Str extends `${infer First}${infer Rest}`
  ? CharUnionImpl<Rest, AccUnion | First>
  : AccUnion;

export type CharUnion<Str extends string> = IsLiteral<Str> extends false
  ? string
  : CharUnionImpl<Str>;
