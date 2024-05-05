/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/9a678d8a400c97436d428dad05405abb154af958/sources/String/Split.ts
 */

import { And } from '../boolean';
import { If } from '../common';
import { IsLiteral } from './Literal';
import { IsLiteralTemplatePart, TemplatePart } from './TemplatePart';

export type SplitOneImpl<
  Str extends string,
  Separator extends TemplatePart,
> = Str extends `${infer Left}${Separator}${infer Right}`
  ? [Left, Right]
  : [Str];

export type SplitImpl<
  Str extends string,
  Separator extends TemplatePart,
  Result extends string[] = [],
> = Str extends `${infer Left}${Separator}${infer Right}`
  ? SplitImpl<Right, Separator, [...Result, Left]>
  : Str extends ''
    ? Result
    : [...Result, Str];

export type Split<Str extends string, Separator extends TemplatePart> = If<
  And<IsLiteral<Str>, IsLiteralTemplatePart<Separator>>,
  SplitImpl<Str, Separator>,
  string[]
>;

export const split = <Str extends string, Separator extends TemplatePart>(
  str: Str,
  separator: Separator,
) => str.split(separator as string) as Split<Str, Separator>;
