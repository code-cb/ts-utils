import { If } from '../common';
import { IsLiteral } from './Literal';

export type SubListImpl<
  List extends readonly any[],
  Result extends any[] = [],
> = List extends readonly [infer First, ...infer Tail]
  ? Result | SubListImpl<Tail, [...Result, First]>
  : Result;

export type SubList<List extends readonly any[]> = If<
  IsLiteral<List>,
  SubListImpl<List>,
  List[number][]
>;
