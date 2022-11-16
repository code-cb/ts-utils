export type Optional<Value> = Value | undefined;

export const asOptional = <Value>(value: Value) => value as Optional<Value>;
