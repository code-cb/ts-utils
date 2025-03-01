import { Extends, If } from '../common';
import { ElementOrSingle, ReadonlyArrayOrSingle } from './ArrayOrSingle';
import { IsLiteral } from './Literal';

type FilterInImpl<
  List extends readonly any[],
  Included,
  Result extends readonly any[] = [],
> = List extends readonly [infer First, ...infer Tail]
  ? If<
      Extends<First, Included>,
      FilterInImpl<Tail, Included, [...Result, First]>,
      FilterInImpl<Tail, Included, Result>
    >
  : Result;

export type FilterIn<List extends readonly any[], Included> = If<
  IsLiteral<List>,
  FilterInImpl<List, Included>,
  List[number][]
>;

export const filterIn = <
  List extends readonly any[],
  Included extends ReadonlyArrayOrSingle<any>,
>(
  list: List,
  included: Included,
) => {
  const includedList = Array.isArray(included) ? included : [included];
  return list.filter(e => includedList.includes(e)) as FilterIn<
    List,
    ElementOrSingle<Included>
  >;
};
