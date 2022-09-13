/**
 * References:
 * - https://github.com/type-challenges/type-challenges/issues/11801#issue-1275043645
 */

import { IsLiteral } from './Literal';

type ReverseImpl<
  Str extends string,
  AccStr extends string = '',
> = Str extends `${infer First}${infer Rest}`
  ? ReverseImpl<Rest, `${First}${AccStr}`>
  : AccStr;

export type Reverse<Str extends string> = IsLiteral<Str> extends false
  ? string
  : ReverseImpl<Str>;
