import { If } from '../common';
import { IsLiteral } from './Literal';

type TailImpl<Str extends string> = Str extends `${string}${infer Tail}`
  ? Tail
  : '';

export type Tail<Str extends string> = If<
  IsLiteral<Str>,
  TailImpl<Str>,
  string
>;

export const tail = <Str extends string>(str: Str) => str.slice(1) as Tail<Str>;
