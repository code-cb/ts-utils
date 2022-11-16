export type Maybe<Value> = Value | null | undefined;

export const asMaybe = <Value>(value: Value) => value as Maybe<Value>;
