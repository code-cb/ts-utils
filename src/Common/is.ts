/**
 * References:
 * - https://github.com/garronej/tsafe/blob/3cde2f3d075c277c6c80998f8330e9bfb4936796/src/is.ts
 * - https://github.com/garronej/tsafe/blob/3cde2f3d075c277c6c80998f8330e9bfb4936796/src/typeGuard.ts
 */

export const is = <Value>(_value: unknown, guard = true): _value is Value =>
  guard;
