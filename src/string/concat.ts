import { If } from '../common';
import { IsLiteral as IsArrayLiteral } from '../list';
import { TemplatePart } from './TemplatePart';

type ConcatImpl<
  StrList extends readonly TemplatePart[],
  Result extends string = '',
> = StrList extends readonly [
  infer First extends TemplatePart,
  ...infer Tail extends TemplatePart[],
]
  ? ConcatImpl<Tail, `${Result}${First}`>
  : Result;

export type Concat<StrList extends readonly TemplatePart[]> = If<
  IsArrayLiteral<StrList>,
  ConcatImpl<StrList, ''>,
  string
>;

export const concat = <StrList extends readonly TemplatePart[]>(
  ...strList: StrList
) => {
  const [str, ...rest] = strList;
  return (
    str ? String(str).concat(...(rest as unknown as string[])) : ''
  ) as Concat<StrList>;
};
