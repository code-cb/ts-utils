import * as B from 'boolean';
import { assert, Equals } from 'common';
import * as N from 'number';

describe(`N.Integer and N.IsInteger`, () => {
  it(`works`, () => {
    assert<Equals<N.Integer<3>, 3>>();
    assert<N.IsInteger<3>>();

    assert<Equals<N.Integer<2e8>, 200000000>>();
    assert<N.IsInteger<2e8>>();

    assert<Equals<N.Integer<0.0>, 0>>();
    assert<N.IsInteger<0.0>>();

    assert<Equals<N.Integer<-0>, 0>>();
    assert<N.IsInteger<-0>>();

    assert<Equals<N.Integer<-4>, -4>>();
    assert<N.IsInteger<-4>>();

    assert<Equals<N.Integer<4.3>, never>>();
    assert<B.Not<N.IsInteger<4.3>>>();

    assert<Equals<N.Integer<-0.7>, never>>();
    assert<B.Not<N.IsInteger<-0.7>>>();

    assert<Equals<N.Integer<0.3>, never>>();
    assert<B.Not<N.IsInteger<0.3>>>();

    assert<Equals<N.Integer<number>, number>>();
    assert<Equals<N.IsInteger<number>, boolean>>();
  });
});

describe(`N.isInteger`, () => {
  it(`works`, () => {
    const i1 = N.isInteger(1234);
    assert<Equals<typeof i1, true>>();
    expect(i1).toBe(true);

    const i2 = N.isInteger(12.34);
    assert<Equals<typeof i2, false>>();
    expect(i2).toBe(false);
  });
});
