import * as B from '../../src/boolean/index.js';
import * as N from '../../src/number/index.js';
import { assert, Equals } from '../../src/common/index.js';

assert<Equals<N.Integer<3>, 3>>();
assert<Equals<N.IsInteger<3>, true>>();

assert<Equals<N.Integer<2e8>, 200000000>>();
assert<Equals<N.IsInteger<2e8>, true>>();

assert<Equals<N.Integer<0.0>, 0>>();
assert<Equals<N.IsInteger<0.0>, true>>();

assert<Equals<N.Integer<-4>, -4>>();
assert<Equals<N.IsInteger<-4>, true>>();

assert<Equals<N.Integer<4.3>, never>>();
assert<B.Not<N.IsInteger<4.3>>>();

assert<Equals<N.Integer<-0.7>, never>>();
assert<B.Not<N.IsInteger<-0.7>>>();

assert<Equals<N.Integer<0.3>, never>>();
assert<B.Not<N.IsInteger<0.3>>>();

assert<Equals<N.Integer<number>, never>>();
assert<B.Not<N.IsInteger<number>>>();

export const f1 = <Value extends number>(value: Value) => {
  if (N.isInteger(value)) {
    assert<Equals<typeof value, N.Integer<Value>>>();
  }
};
