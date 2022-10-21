export type Truthy<Value> = Exclude<Value, false | undefined | null | 0 | ''>;

export const isTruthy = <Value>(value: Value): value is Truthy<Value> =>
  !!value;
