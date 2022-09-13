/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/9a678d8a400c97436d428dad05405abb154af958/sources/String/Join.ts
 * - https://github.com/sindresorhus/type-fest/blob/cca3ca2c27c1d803e4b6964b808a88f6cc123806/source/join.d.ts
 */

import { IsTuple } from '../list/tuple';
import { IsLiteralTemplatePart, TemplatePart } from './TemplatePart';

type Concat<
  StrA extends TemplatePart,
  StrB extends TemplatePart,
  Separator extends TemplatePart,
> = IsLiteralTemplatePart<StrA | StrB> extends false
  ? string
  : `${StrA}${Separator}${StrB}`;

type JoinRaw<
  StrList extends ReadonlyArray<TemplatePart>,
  Separator extends TemplatePart,
  Result extends string,
> = StrList extends [
  infer First extends TemplatePart,
  ...infer Rest extends ReadonlyArray<TemplatePart>,
]
  ? JoinRaw<Rest, Separator, Concat<Result, First, Separator>>
  : Result;

export type JoinImpl<
  StrList extends ReadonlyArray<TemplatePart>,
  Separator extends TemplatePart,
> = StrList extends [
  infer First extends TemplatePart,
  ...infer Rest extends ReadonlyArray<TemplatePart>,
]
  ? JoinRaw<Rest, Separator, `${First}`>
  : '';

export type Join<
  StrList extends ReadonlyArray<TemplatePart>,
  Separator extends TemplatePart,
> = IsTuple<StrList> extends false
  ? string
  : IsLiteralTemplatePart<Separator> extends false
  ? string
  : JoinImpl<StrList, Separator>;
