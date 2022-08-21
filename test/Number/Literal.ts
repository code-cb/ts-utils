import * as B from '../../src/boolean/index.js';
import * as N from '../../src/number/index.js';
import { assert, Equals } from '../../src/common/index.js';

const enum MyEnum {
  A = 0,
  B = 1,
}

type MyType = 0 | 1;

type MyTuple = [0, 1];

assert<N.IsLiteral<42>>();
assert<Equals<N.Literal<42>, 42>>();

// @ts-expect-error
assert<B.Not<N.IsLiteral<'42'>>>();
// @ts-expect-error
assert<Equals<N.Literal<'42'>, never>>();

assert<B.Not<N.IsLiteral<MyEnum>>>(); // Hmm...
assert<Equals<N.Literal<MyEnum>, never>>(); // Hmm...

assert<N.IsLiteral<MyType>>();
assert<Equals<N.Literal<MyType>, 0 | 1>>();

assert<N.IsLiteral<MyTuple['length']>>();
assert<Equals<N.Literal<MyTuple['length']>, 2>>();

assert<B.Not<N.IsLiteral<number>>>();
assert<Equals<N.Literal<number>, never>>();

// @ts-expect-error
assert<B.Not<N.IsLiteral<unknown>>>();
// @ts-expect-error
assert<Equals<N.Literal<unknown>, never>>();
