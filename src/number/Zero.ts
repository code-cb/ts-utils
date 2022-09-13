import { If } from '../common';
import { IsLiteral } from './Literal';
import { Numeric } from './Numeric';

export type Zero = 0 | 0n;

export type IsZeroImpl<Num extends Numeric> = Num extends Zero ? true : false;

export type IsZero<Num extends Numeric> = If<
  IsLiteral<Num>,
  IsZeroImpl<Num>,
  boolean
>;
