import { If } from '../common';
import { FirstImpl } from './first';
import { IsLiteral } from './Literal';
import { ReverseImpl } from './reverse';

type LastImpl<Str extends string> = FirstImpl<ReverseImpl<Str>>;

export type Last<Str extends string> = If<
  IsLiteral<Str>,
  LastImpl<Str>,
  string | undefined
>;

export const last = <Str extends string>(str: Str) => str.at(-1) as Last<Str>;
