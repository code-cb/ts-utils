/**
 * References:
 * - https://github.com/type-challenges/type-challenges/issues/11801#issue-1275043645
 */

import { If } from '../common';
import { IsLiteral } from './Literal';

export type ReverseImpl<
  Str extends string,
  AccStr extends string = '',
> = Str extends `${infer First}${infer Rest}`
  ? ReverseImpl<Rest, `${First}${AccStr}`>
  : AccStr;

export type Reverse<Str extends string> = If<
  IsLiteral<Str>,
  ReverseImpl<Str>,
  string
>;

export const reverse = <Str extends string>(str: Str) =>
  [...str].reverse().join('') as Reverse<Str>;
