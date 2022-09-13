import { IsLiteral } from './Literal';

type HeadImpl<
  Str extends string,
  Result extends string = '',
> = Str extends `${infer Char}${infer Rest}`
  ? Rest extends `${infer _}${string}`
    ? HeadImpl<Rest, `${Result}${Char}`>
    : Result
  : Result;

export type Head<Str extends string> = IsLiteral<Str> extends false
  ? string
  : HeadImpl<Str>;
