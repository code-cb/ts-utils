import { assert, Equals } from 'common';
import * as N from 'number';

assert<Equals<N.AbsoluteNumber<0>, 0>>();
assert<Equals<N.AbsoluteNumber<-0>, 0>>();
assert<Equals<N.AbsoluteNumber<244>, 244>>();
assert<Equals<N.AbsoluteNumber<-426>, 426>>();
assert<Equals<N.AbsoluteNumber<number>, number>>();

assert<Equals<N.AbsoluteBigInt<0n>, 0n>>();
assert<Equals<N.AbsoluteBigInt<-0n>, 0n>>();
assert<Equals<N.AbsoluteBigInt<592n>, 592n>>();
assert<Equals<N.AbsoluteBigInt<-924n>, 924n>>();
assert<Equals<N.AbsoluteBigInt<bigint>, bigint>>();
