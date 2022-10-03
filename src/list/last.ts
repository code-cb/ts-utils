import { If } from '../common';
import { IsLiteral } from './Literal';

export type LastImpl<
  List extends ReadonlyArray<any>,
  Type = any,
  NotFound = never,
> = List extends readonly [...any[], infer Last extends Type] ? Last : NotFound;

export type Last<
  List extends ReadonlyArray<any>,
  Type = any,
  NotFound = never,
> = If<
  IsLiteral<List>,
  LastImpl<List, Type, NotFound>,
  List[number] | undefined
>;

export const last = <List extends ReadonlyArray<any>>(list: List) =>
  list.at(-1) as Last<List, any, undefined>;
