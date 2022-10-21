export const isNonNullable = <Value>(
  value: Value,
): value is NonNullable<Value> => value != undefined;
