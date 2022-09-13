export type Shift<List extends any[]> = List extends [infer First, ...any[]]
  ? First
  : List extends []
  ? undefined
  : List[number] | undefined;

export const shift = <List extends any[]>(list: List) =>
  list.shift() as Shift<List>;
