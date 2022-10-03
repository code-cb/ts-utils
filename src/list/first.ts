import { If } from '../common';
import { IsLiteral } from './Literal';

export type FirstImpl<
  List extends ReadonlyArray<any>,
  Type = any,
  NotFound = never,
> = List extends readonly [infer First extends Type, ...any[]]
  ? First
  : NotFound;

export type First<
  List extends ReadonlyArray<any>,
  Type = any,
  NotFound = never,
> = If<
  IsLiteral<List>,
  FirstImpl<List, Type, NotFound>,
  List[number] | NotFound
>;

export const first = <List extends ReadonlyArray<any>>(list: List) =>
  list[0] as First<List, any, undefined>;
