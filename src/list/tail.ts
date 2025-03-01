import { If } from '../common';
import { IsLiteral } from './Literal';

export type TailImpl<
  List extends readonly any[],
  Type = any,
  NotFound = never,
> = List extends readonly [any, ...infer Tail]
  ? Tail extends Type[]
    ? Tail
    : NotFound
  : NotFound;

export type Tail<
  List extends readonly any[],
  Type = any,
  NotFound = never,
> = If<IsLiteral<List>, TailImpl<List, Type, NotFound>, List[number][]>;

export const tail = <List extends readonly any[]>(list: List) =>
  list.slice(1) as Tail<List, any, []>;
