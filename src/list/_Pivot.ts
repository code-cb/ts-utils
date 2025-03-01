type PivotBackwardRaw<
  Index extends number,
  Left extends readonly any[],
  Right extends readonly any[],
> = Right['length'] extends Index
  ? [Left, Right]
  : Left extends readonly [...infer Head, infer Last]
    ? PivotBackwardRaw<Index, Head, [Last, ...Right]>
    : [Left, Right];

export type PivotBackwardImpl<
  Arr extends readonly any[],
  Index extends number,
> = PivotBackwardRaw<Index, Arr, []>;

type PivotForwardRaw<
  Index extends number,
  Left extends readonly any[],
  Right extends readonly any[],
> = Left['length'] extends Index
  ? [Left, Right]
  : Right extends readonly [infer First, ...infer Tail]
    ? PivotForwardRaw<Index, [...Left, First], Tail>
    : [Left, Right];

export type PivotForwardImpl<
  List extends readonly any[],
  Index extends number,
> = PivotForwardRaw<Index, [], List>;
