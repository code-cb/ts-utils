/**
 * References:
 * - https://github.com/garronej/tsafe/blob/4f57bbfd5a35ac9b70f84ccfc59a436bff014af2/src/id.ts
 */

export function id<Value>(value: Value): Value;
export function id<SuperType>(): <Value extends SuperType>(
  value: Value,
) => Value;
export function id(...args: any[]): any {
  return args.length ? args[0] : (value: any) => value;
}

export type Id<SuperType, Value extends SuperType> = Value;
