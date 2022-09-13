import { If } from '../common';
import { IsLiteral } from './Literal';

export type LastImpl<List extends ReadonlyArray<any>> = List extends readonly [
  ...any[],
  infer Last,
]
  ? Last
  : undefined;

export type Last<List extends ReadonlyArray<any>> = If<
  IsLiteral<List>,
  LastImpl<List>,
  List[number] | undefined
>;

export const last = <List extends ReadonlyArray<any>>(list: List) =>
  list[list.length - 1] as Last<List>;
