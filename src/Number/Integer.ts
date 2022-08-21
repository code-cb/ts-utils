/**
 * References:
 * - https://github.com/sindresorhus/type-fest/blob/8ca2959bc8613e6856681dd14abb1ebcbfef6b25/source/numeric.d.ts#L70
 * - https://github.com/sindresorhus/ts-extras/blob/2874930a648d7d7cdd6c742da2ec091670144f04/source/is-integer.ts
 */

export type Integer<Value extends number> = `${Value}` extends `${bigint}`
  ? Value
  : never;

export type IsInteger<Value extends number> = `${Value}` extends `${bigint}`
  ? true
  : false;

export const isInteger = Number.isInteger as <T extends number>(
  value: T,
) => value is Integer<T>;
