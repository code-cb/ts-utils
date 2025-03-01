import { If } from '../common';
import { ElementOrSingle, ReadonlyArrayOrSingle } from './ArrayOrSingle';
import { IsLiteral } from './Literal';

type FilterOutImpl<
  List extends readonly any[],
  Excluded,
  Result extends readonly any[] = [],
> = List extends readonly [infer First, ...infer Tail]
  ? [First] extends [Excluded]
    ? FilterOutImpl<Tail, Excluded, Result>
    : FilterOutImpl<Tail, Excluded, [...Result, First]>
  : Result;

export type FilterOut<List extends readonly any[], Excluded> = If<
  IsLiteral<List>,
  FilterOutImpl<List, Excluded>,
  List[number][]
>;

export const filterOut = <
  List extends readonly any[],
  Excluded extends ReadonlyArrayOrSingle<any>,
>(
  list: List,
  excluded: Excluded,
) => {
  const excludedList = Array.isArray(excluded) ? excluded : [excluded];
  return list.filter(e => !excludedList.includes(e)) as FilterOut<
    List,
    ElementOrSingle<Excluded>
  >;
};
