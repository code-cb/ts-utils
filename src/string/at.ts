/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/782915b1b85bb8be5318a5f0fc473fe90fbf5236/sources/String/At.ts
 */

import { And } from '../boolean';
import { If } from '../common';
import { AtImpl as List_AtImpl } from '../list/at';
import { IsLiteral as IsNumLiteral } from '../number';
import { IsLiteral as IsStrLiteral } from './Literal';
import { ToTuple } from './toTuple';

type AtImpl<Str extends string, Index extends number> = List_AtImpl<
  ToTuple<Str>,
  Index
>;

export type At<Str extends string, Index extends number> = If<
  And<IsStrLiteral<Str>, IsNumLiteral<Index>>,
  AtImpl<Str, Index>,
  string | undefined
>;

export const at = <Str extends string, Index extends number>(
  str: Str,
  index: Index,
) => str.at(index) as At<Str, Index>;
