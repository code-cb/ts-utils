import { assert, Equals } from 'common';
import * as N from 'number';

describe(`N.AbsoluteNumber`, () => {
  it(`works`, () => {
    assert<Equals<N.AbsoluteNumber<0>, 0>>();
    assert<Equals<N.AbsoluteNumber<-0>, 0>>();
    assert<Equals<N.AbsoluteNumber<244>, 244>>();
    assert<Equals<N.AbsoluteNumber<-426>, 426>>();
    assert<Equals<N.AbsoluteNumber<46.211>, 46.211>>();
    assert<Equals<N.AbsoluteNumber<-1.545>, 1.545>>();
    assert<Equals<N.AbsoluteNumber<2.3e9>, 2_300_000_000>>();
    assert<Equals<N.AbsoluteNumber<-4.2537e2>, 425.37>>();
    assert<Equals<N.AbsoluteNumber<number>, number>>();
  });
});

// describe(`N.AbsoluteBigInt`, () => {
//   it(`works`, () => {
//     assert<Equals<N.AbsoluteBigInt<0n>, 0n>>();
//     assert<Equals<N.AbsoluteBigInt<-0n>, 0n>>();
//     assert<Equals<N.AbsoluteBigInt<592n>, 592n>>();
//     assert<Equals<N.AbsoluteBigInt<-924n>, 924n>>();
//     assert<Equals<N.AbsoluteBigInt<bigint>, bigint>>();
//   });
// });
