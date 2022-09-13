import * as B from 'boolean';
import { assert, Equals } from 'common';
import * as N from 'number';

const enum MyEnum {
  A = 0,
  B = 1,
}

type MyType = 0 | 1;

type MyTuple = [0, 1];

assert<N.IsLiteral<42>>();
assert<Equals<N.Literal<42>, 42>>();

assert<N.IsLiteral<20000n>>();
assert<Equals<N.Literal<20000n>, 20000n>>();

// @ts-expect-error
type I1 = N.IsLiteral<'42'>;
// @ts-expect-error
type L2 = N.Literal<'42'>;

assert<B.Not<N.IsLiteral<MyEnum>>>(); // Hmm...
assert<Equals<N.Literal<MyEnum>, never>>(); // Hmm...

assert<N.IsLiteral<MyType>>();
assert<Equals<N.Literal<MyType>, 0 | 1>>();

assert<N.IsLiteral<MyTuple['length']>>();
assert<Equals<N.Literal<MyTuple['length']>, 2>>();

assert<B.Not<N.IsLiteral<number>>>();
assert<Equals<N.Literal<number>, never>>();

assert<B.Not<N.IsLiteral<bigint>>>();
assert<Equals<N.Literal<bigint>, never>>();
