import { If } from '../common';
import { IsLiteral } from './Literal';

type HeadImpl<
  Str extends string,
  Result extends string = '',
> = Str extends `${infer Char}${infer Rest}`
  ? Rest extends `${infer _}${string}`
    ? HeadImpl<Rest, `${Result}${Char}`>
    : Result
  : Result;

export type Head<Str extends string> = If<
  IsLiteral<Str>,
  HeadImpl<Str>,
  string
>;

export const head = <Str extends string>(str: Str) =>
  str.slice(0, -1) as Head<Str>;
