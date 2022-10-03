import { If } from '../common';
import { IsLiteral } from './Literal';

export type HeadImpl<
  List extends ReadonlyArray<any>,
  Type = any,
  NotFound = never,
> = List extends readonly [...infer Head, any]
  ? Head extends Type[]
    ? Head
    : NotFound
  : NotFound;

export type Head<
  List extends ReadonlyArray<any>,
  Type = any,
  NotFound = never,
> = If<IsLiteral<List>, HeadImpl<List, Type, NotFound>, List[number][]>;

export const head = <List extends ReadonlyArray<any>>(list: List) =>
  list.slice(0, -1) as Head<List, any, []>;
