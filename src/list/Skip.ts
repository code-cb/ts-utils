import { PivotForwardImpl } from './_Pivot';

export type SkipImpl<
  List extends readonly any[],
  Count extends number,
> = PivotForwardImpl<List, Count>[1];
