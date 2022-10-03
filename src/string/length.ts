/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/6dcd2ca8c5a9317fcf91f6a55b5fae12f6a163e1/sources/String/Length.ts
 */

import { Split } from './split';

export type Length<Str extends string> = Split<Str, ''>['length'];

export const length = <Str extends string>(str: Str) =>
  str.length as Length<Str>;
