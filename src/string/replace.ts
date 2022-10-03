/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/9a678d8a400c97436d428dad05405abb154af958/sources/String/Replace.ts
 * - https://github.com/sindresorhus/type-fest/blob/1483de38aac6fa2e4e23d6c828c3538556bbe64b/source/replace.d.ts
 */

import { JoinImpl } from './join';
import { IsLiteral } from './Literal';
import { SplitImpl, SplitOneImpl } from './split';
import { IsLiteralTemplatePart, TemplatePart } from './TemplatePart';

type Fix = '@';

type AddFixes<Str extends string> = `${Fix}${Str}${Fix}`;

type RemoveFixes<Str extends string> = Str extends `${Fix}${infer Inner}${Fix}`
  ? Inner
  : never;

type IsAllLiteral<
  Str extends string,
  SearchValue extends TemplatePart,
  ReplaceValue extends TemplatePart,
> = IsLiteral<Str> extends false
  ? false
  : IsLiteralTemplatePart<SearchValue | ReplaceValue> extends false
  ? false
  : true;

export type Replace<
  Str extends string,
  SearchValue extends TemplatePart,
  ReplaceValue extends TemplatePart,
> = IsAllLiteral<Str, SearchValue, ReplaceValue> extends false
  ? string
  : SearchValue extends ''
  ? RemoveFixes<
      JoinImpl<SplitOneImpl<AddFixes<Str>, SearchValue>, ReplaceValue>
    >
  : Str extends `${infer Left}${SearchValue}${infer Right}`
  ? `${Left}${ReplaceValue}${Right}`
  : Str;

export const replace = <
  Str extends string,
  SearchValue extends TemplatePart,
  ReplaceValue extends TemplatePart,
>(
  str: Str,
  searchValue: SearchValue,
  replaceValue: ReplaceValue,
) =>
  str.replace(searchValue as string, replaceValue as string) as Replace<
    Str,
    SearchValue,
    ReplaceValue
  >;

type ReplaceAllImpl<
  Str extends string,
  SearchValue extends TemplatePart,
  ReplaceValue extends TemplatePart,
  Result extends string = '',
> = Str extends `${infer Left}${SearchValue}${infer Right}`
  ? ReplaceAllImpl<
      Right,
      SearchValue,
      ReplaceValue,
      `${Result}${Left}${ReplaceValue}`
    >
  : `${Result}${Str}`;

export type ReplaceAll<
  Str extends string,
  SearchValue extends TemplatePart,
  ReplaceValue extends TemplatePart,
> = IsAllLiteral<Str, SearchValue, ReplaceValue> extends false
  ? string
  : SearchValue extends ''
  ? RemoveFixes<JoinImpl<SplitImpl<AddFixes<Str>, SearchValue>, ReplaceValue>>
  : ReplaceAllImpl<Str, SearchValue, ReplaceValue>;

export const replaceAll = <
  Str extends string,
  SearchValue extends TemplatePart,
  ReplaceValue extends TemplatePart,
>(
  str: Str,
  searchValue: SearchValue,
  replaceValue: ReplaceValue,
) =>
  str.replaceAll(searchValue as string, replaceValue as string) as ReplaceAll<
    Str,
    SearchValue,
    ReplaceValue
  >;
