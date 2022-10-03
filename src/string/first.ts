import { If } from '../common';
import { IsLiteral } from './Literal';

export type FirstImpl<Str extends string> = Str extends `${infer Char}${string}`
  ? Char
  : undefined;

export type First<Str extends string> = If<
  IsLiteral<Str>,
  FirstImpl<Str>,
  string | undefined
>;

export const first = <Str extends string>(str: Str) => str[0] as First<Str>;
