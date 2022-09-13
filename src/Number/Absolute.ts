import { Numeric } from './Numeric';

type AbsoluteStr<
  NumStr extends string,
  NumericType extends Numeric,
> = NumStr extends `-${infer Abs extends NumericType}`
  ? Abs
  : NumStr extends `${infer Abs extends NumericType}`
  ? Abs
  : NumericType;

export type AbsoluteNumber<Num extends number> = AbsoluteStr<`${Num}`, number>;

export type AbsoluteBigInt<Num extends bigint> = AbsoluteStr<`${Num}`, bigint>;
