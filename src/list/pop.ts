export type Pop<List extends any[]> = List extends [...any[], infer Last]
  ? Last
  : List extends []
    ? undefined
    : List[number] | undefined;

export const pop = <List extends any[]>(list: List) => list.pop() as Pop<List>;
