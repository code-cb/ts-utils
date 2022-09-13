import { IsLiteral } from './Literal';

type LastImpl<
  Str extends string,
  Result extends string | undefined = undefined,
> = Str extends `${infer Char}${infer Rest}` ? LastImpl<Rest, Char> : Result;

export type Last<Str extends string> = IsLiteral<Str> extends false
  ? string
  : LastImpl<Str>;
