import * as B from '../../sources/boolean';
import { assert, Equals } from '../../sources/common';
import * as N from '../../sources/number';

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

export const f1 = <Value extends number>(value: Value) => {
  if (N.isInteger(value)) {
    assert<Equals<typeof value, N.Integer<Value>>>();
  }
};
