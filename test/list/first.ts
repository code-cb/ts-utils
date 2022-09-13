import { assert, Equals } from 'common';
import * as L from 'list';

assert<Equals<L.First<[]>, undefined>>();
const v1 = L.first([] as const);
assert<Equals<typeof v1, undefined>>();

assert<Equals<L.First<[9, 5, 2]>, 9>>();
assert<Equals<L.First<readonly [9, 5, 2]>, 9>>();
const v2 = L.first([9, 5, 2] as const);
assert<Equals<typeof v2, 9>>();

assert<Equals<L.First<number[]>, number | undefined>>();
const v3 = L.first([2, 6, 3]);
assert<Equals<typeof v3, number | undefined>>();
