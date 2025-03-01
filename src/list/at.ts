import { And } from '../boolean';
import { If } from '../common';
import { AbsoluteNumber, IsLiteral as IsNumLiteral } from '../number';
import { IsNegativeImpl } from '../number/Negative';
import { IsLiteral as IsArrayLiteral } from './Literal';

type AtBackward<
  Index extends number,
  Left extends readonly any[],
  Right extends readonly any[],
> = Right['length'] extends Index
  ? Right[0]
  : Left extends readonly [...infer Head, infer Last]
    ? AtBackward<Index, Head, [Last, ...Right]>
    : undefined;

export type AtImpl<List extends readonly any[], Index extends number> =
  IsNegativeImpl<Index> extends true
    ? AtBackward<AbsoluteNumber<Index>, List, []>
    : List[Index];

export type At<List extends readonly any[], Index extends number> = If<
  And<IsArrayLiteral<List>, IsNumLiteral<Index>>,
  AtImpl<List, Index>,
  List[number] | undefined
>;

export const at = <List extends readonly any[], Index extends number>(
  list: List,
  index: Index,
) => list.at(index) as At<List, Index>;
