import { And, Not } from '../boolean';
import { If } from '../common';
import { IsLiteral } from './Literal';
import { IsNegativeImpl } from './Negative';
import { Numeric } from './Numeric';
import { IsZeroImpl } from './Zero';

type IsPositiveImpl<Num extends Numeric> = And<
  Not<IsZeroImpl<Num>>,
  Not<IsNegativeImpl<Num>>
>;

export type IsPositive<Num extends Numeric> = If<
  IsLiteral<Num>,
  IsPositiveImpl<Num>,
  boolean
>;

type PositiveImpl<Num extends Numeric> = If<IsPositiveImpl<Num>, Num, never>;

export type Positive<Num extends Numeric> = If<
  IsLiteral<Num>,
  PositiveImpl<Num>,
  Num extends number ? number : Num extends bigint ? bigint : never
>;
