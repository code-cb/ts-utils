import { Split } from './split';

export type ToTuple<Str extends string> = Split<Str, ''>;

export const toTuple = <Str extends string>(str: Str) =>
  Array.from(str) as ToTuple<Str>;
