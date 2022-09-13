import { assert, Equals } from '../../sources/common';
import * as N from '../../sources/number';

assert<Equals<N.Sign<0>, N.NumericSign.Zero>>();
assert<Equals<N.Sign<-0>, N.NumericSign.Zero>>();
assert<Equals<N.Sign<0n>, N.NumericSign.Zero>>();
assert<Equals<N.Sign<-0n>, N.NumericSign.Zero>>();
assert<Equals<N.Sign<49>, N.NumericSign.Positive>>();
assert<Equals<N.Sign<-73>, N.NumericSign.Negative>>();
assert<Equals<N.Sign<834n>, N.NumericSign.Positive>>();
assert<Equals<N.Sign<-623n>, N.NumericSign.Negative>>();
