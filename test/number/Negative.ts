import { Not } from 'boolean';
import { assert, Equals, IsNever } from 'common';
import * as N from 'number';

describe(`N.IsNegative and N.Negative`, () => {
  it(`works`, () => {
    assert<Not<N.IsNegative<0>>>();
    assert<IsNever<N.Negative<0>>>();

    assert<Not<N.IsNegative<-0>>>();
    assert<IsNever<N.Negative<-0>>>();

    assert<Not<N.IsNegative<0n>>>();
    assert<IsNever<N.Negative<0n>>>();

    assert<Not<N.IsNegative<400>>>();
    assert<IsNever<N.Negative<400>>>();

    assert<N.IsNegative<-400>>();
    assert<Equals<N.Negative<-400>, -400>>();

    assert<Not<N.IsNegative<5000n>>>();
    assert<IsNever<N.Negative<5000n>>>();

    assert<N.IsNegative<-5000n>>();
    assert<Equals<N.Negative<-5000n>, -5000n>>();

    assert<Not<N.IsNegative<2.5>>>();
    assert<IsNever<N.Negative<2.5>>>();

    assert<N.IsNegative<-2.5>>();
    assert<Equals<N.Negative<-2.5>, -2.5>>();

    assert<Equals<N.IsNegative<number>, boolean>>();
    assert<Equals<N.Negative<number>, number>>();

    assert<Equals<N.IsNegative<bigint>, boolean>>();
    assert<Equals<N.Negative<bigint>, bigint>>();
  });
});
