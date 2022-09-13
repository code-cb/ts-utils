import { Not } from 'boolean';
import { assert, Assignable, Equals } from 'common';
import * as N from 'number';

assert<N.IsZero<0>>();
assert<Assignable<0, N.Zero>>();
assert<N.IsZero<0n>>();
assert<Assignable<0n, N.Zero>>();

assert<Not<N.IsZero<5>>>();
assert<Not<Assignable<5, N.Zero>>>();
assert<Not<N.IsZero<500n>>>();
assert<Not<Assignable<500n, N.Zero>>>();

assert<Equals<N.IsZero<number>, boolean>>();
assert<Equals<N.IsZero<bigint>, boolean>>();
