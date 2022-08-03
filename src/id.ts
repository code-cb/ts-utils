/**
 * References:
 * - https://github.com/garronej/tsafe/blob/4f57bbfd5a35ac9b70f84ccfc59a436bff014af2/src/id.ts
 */

// export const id = <T>(value: T) => value;
export function id<T>(value: T): T;
export function id<Generic>(): <Specific extends Generic>(
  value: Specific,
) => Specific;
export function id(...args: any[]): any {
  return args.length ? args[0] : (value: any) => value;
}

export type Id<Generic, Specific extends Generic> = Specific;
