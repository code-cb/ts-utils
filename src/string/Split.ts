/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/9a678d8a400c97436d428dad05405abb154af958/sources/String/Split.ts
 */

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

export type Split<
  Str extends string,
  Separator extends TemplatePart,
> = IsLiteral<Str> extends false
  ? string[]
  : IsLiteralTemplatePart<Separator> extends false
  ? string[]
  : SplitImpl<Str, Separator>;
