import { Not } from 'boolean';
import { assert, Equals, IsNever } from 'common';
import * as N from 'number';

describe(`N.IsPositive and N.Positive`, () => {
  it(`works`, () => {
    assert<Not<N.IsPositive<0>>>();
    assert<IsNever<N.Positive<0>>>();

    assert<Not<N.IsPositive<-0>>>();
    assert<IsNever<N.Positive<-0>>>();

    assert<Not<N.IsPositive<0n>>>();
    assert<IsNever<N.Positive<0n>>>();

    assert<Not<N.IsPositive<-400>>>();
    assert<IsNever<N.Positive<-400>>>();

    assert<N.IsPositive<400>>();
    assert<Equals<N.Positive<400>, 400>>();

    assert<Not<N.IsPositive<-5000n>>>();
    assert<IsNever<N.Positive<-5000n>>>();

    assert<N.IsPositive<5000n>>();
    assert<Equals<N.Positive<5000n>, 5000n>>();

    assert<Not<N.IsPositive<-2.5>>>();
    assert<IsNever<N.Positive<-2.5>>>();

    assert<N.IsPositive<2.5>>();
    assert<Equals<N.Positive<2.5>, 2.5>>();

    assert<Equals<N.IsPositive<number>, boolean>>();
    assert<Equals<N.Positive<number>, number>>();

    assert<Equals<N.IsPositive<bigint>, boolean>>();
    assert<Equals<N.Positive<bigint>, bigint>>();
  });
});
