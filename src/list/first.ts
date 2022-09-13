import { If } from '../common';
import { IsLiteral } from './Literal';

export type FirstImpl<List extends ReadonlyArray<any>> = List[0];

export type First<List extends ReadonlyArray<any>> = If<
  IsLiteral<List>,
  FirstImpl<List>,
  List[number] | undefined
>;

export const first = <List extends ReadonlyArray<any>>(list: List) =>
  list[0] as First<List>;
