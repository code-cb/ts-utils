import * as B from '../../sources/boolean';
import { assert, Equals } from '../../sources/common';
import * as L from '../../sources/list';

const t1 = ['a', 1, false] as const;
assert<Equals<typeof t1, readonly ['a', 1, false]>>();
assert<L.IsTuple<typeof t1>>();
assert<Equals<L.Tuple<typeof t1>, readonly ['a', 1, false]>>();

const t2 = L.tuple('a', 1, false);
assert<Equals<typeof t2, [string, number, boolean]>>();
assert<L.IsTuple<typeof t2>>();
assert<Equals<L.Tuple<typeof t2>, [string, number, boolean]>>();

const t3 = ['a', 1, false];
assert<B.Not<L.IsTuple<typeof t3>>>();
assert<Equals<L.Tuple<typeof t3>, never>>();
