import * as B from '../../src/boolean/index.js';
import * as N from '../../src/number/index.js';
import { assert } from '../../src/common/index.js';

const enum MyEnum {
  A = 0,
  B = 1,
}

type MyType = 0 | 1;

type MyTuple = [0, 1];

assert<N.IsLiteral<42>>();
assert<B.Not<N.IsLiteral<'42'>>>();
assert<B.Not<N.IsLiteral<MyEnum>>>(); // Hmm...
assert<N.IsLiteral<MyType>>();
assert<N.IsLiteral<MyTuple['length']>>();
assert<B.Not<N.IsLiteral<number>>>();
assert<B.Not<N.IsLiteral<unknown>>>();
