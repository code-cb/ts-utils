import { If } from '../common';
import { IsLiteral } from './Literal';
import { Numeric } from './Numeric';

export type IsNegativeImpl<Num extends Numeric> = `${Num}` extends `-${Numeric}`
  ? true
  : false;

export type IsNegative<Num extends Numeric> = If<
  IsLiteral<Num>,
  IsNegativeImpl<Num>,
  boolean
>;

type NegativeImpl<Num extends Numeric> = If<IsNegativeImpl<Num>, Num, never>;

export type Negative<Num extends Numeric> = If<
  IsLiteral<Num>,
  NegativeImpl<Num>,
  Num extends number ? number : Num extends bigint ? bigint : never
>;
