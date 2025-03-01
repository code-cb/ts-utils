/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/9a678d8a400c97436d428dad05405abb154af958/sources/String/Join.ts
 * - https://github.com/sindresorhus/type-fest/blob/cca3ca2c27c1d803e4b6964b808a88f6cc123806/source/join.d.ts
 */

import { If } from '../common';
import { IsLiteral } from '../list';
import { TemplatePart } from './TemplatePart';

type JoinRaw<
  StrList extends readonly TemplatePart[],
  Separator extends TemplatePart,
  Result extends string,
> = StrList extends readonly [
  infer First extends TemplatePart,
  ...infer Rest extends readonly TemplatePart[],
]
  ? JoinRaw<Rest, Separator, `${Result}${Separator}${First}`>
  : Result;

export type JoinImpl<
  StrList extends readonly TemplatePart[],
  Separator extends TemplatePart,
> = StrList extends readonly [
  infer First extends TemplatePart,
  ...infer Rest extends readonly TemplatePart[],
]
  ? JoinRaw<Rest, Separator, `${First}`>
  : '';

export type Join<
  StrList extends readonly TemplatePart[],
  Separator extends TemplatePart,
> = If<IsLiteral<StrList>, JoinImpl<StrList, Separator>, string>;

export const join = <
  StrList extends readonly TemplatePart[],
  Separator extends TemplatePart,
>(
  strList: StrList,
  separator: Separator,
) => strList.join(separator as string) as Join<StrList, Separator>;
