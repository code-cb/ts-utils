export type Nullable<Value> = Value | null;

export const asNullable = <Value>(value: Value) => value as Nullable<Value>;
