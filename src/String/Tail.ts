import { IsLiteral } from './Literal';

type TailImpl<Str extends string> = Str extends `${string}${infer Tail}`
  ? Tail
  : '';

export type Tail<Str extends string> = IsLiteral<Str> extends false
  ? string
  : TailImpl<Str>;
