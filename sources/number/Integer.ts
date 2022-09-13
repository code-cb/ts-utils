/**
 * bigint values are alway integers, so we only provide type checks for number values here
 */

type IntegerImpl<Num extends number> = `${Num}` extends `${bigint}`
  ? Num
  : never;

export type Integer<Num extends number> = number extends Num
  ? number
  : IntegerImpl<Num>;

type IsIntegerImpl<Num extends number> = `${Num}` extends `${bigint}`
  ? true
  : false;

export type IsInteger<Num extends number> = number extends Num
  ? boolean
  : IsIntegerImpl<Num>;

export const isInteger = Number.isInteger as <T extends number>(
  value: T,
) => value is Integer<T>;
