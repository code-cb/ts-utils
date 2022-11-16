export type NonOptional<Value> = Value extends undefined ? never : Value;

export const asNonOptional = <Value>(value: Value) =>
  value as NonOptional<Value>;
