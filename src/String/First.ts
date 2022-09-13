import { IsLiteral } from './Literal';

export type FirstImpl<Str extends string> =
  Str extends `${infer First}${string}` ? First : undefined;

export type First<Str extends string> = IsLiteral<Str> extends false
  ? string
  : FirstImpl<Str>;
