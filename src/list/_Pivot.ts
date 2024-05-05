type PivotBackwardRaw<
  Index extends number,
  Left extends ReadonlyArray<any>,
  Right extends ReadonlyArray<any>,
> = Right['length'] extends Index
  ? [Left, Right]
  : Left extends readonly [...infer Head, infer Last]
    ? PivotBackwardRaw<Index, Head, [Last, ...Right]>
    : [Left, Right];

export type PivotBackwardImpl<
  Arr extends ReadonlyArray<any>,
  Index extends number,
> = PivotBackwardRaw<Index, Arr, []>;

type PivotForwardRaw<
  Index extends number,
  Left extends ReadonlyArray<any>,
  Right extends ReadonlyArray<any>,
> = Left['length'] extends Index
  ? [Left, Right]
  : Right extends readonly [infer First, ...infer Tail]
    ? PivotForwardRaw<Index, [...Left, First], Tail>
    : [Left, Right];

export type PivotForwardImpl<
  List extends ReadonlyArray<any>,
  Index extends number,
> = PivotForwardRaw<Index, [], List>;
