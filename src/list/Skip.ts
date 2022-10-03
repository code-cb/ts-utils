import { PivotForwardImpl } from './_Pivot';

export type SkipImpl<
  List extends ReadonlyArray<any>,
  Count extends number,
> = PivotForwardImpl<List, Count>[1];
