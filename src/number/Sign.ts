import { If } from '../common';
import { IsLiteral } from './Literal';
import { Numeric } from './Numeric';

export enum NumericSign {
  Zero = '0',
  Positive = '+',
  Negative = '-',
}

type SignStr<
  NumStr extends string,
  Result extends NumericSign = NumStr extends '0'
    ? NumericSign.Zero
    : NumStr extends `-${Numeric}`
      ? NumericSign.Negative
      : NumericSign.Positive,
> = Result;

export type Sign<Num extends Numeric> = If<
  IsLiteral<Num>,
  SignStr<`${Num}`>,
  NumericSign
>;
