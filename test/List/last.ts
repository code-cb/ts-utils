import { assert, Equals } from '../../src/common';
import * as L from '../../src/list';

assert<Equals<L.Last<[]>, undefined>>();
const v1 = L.last([] as const);
assert<Equals<typeof v1, undefined>>();

assert<Equals<L.Last<[9, 5, 2]>, 2>>();
assert<Equals<L.Last<readonly [9, 5, 2]>, 2>>();
const v2 = L.last([9, 5, 2] as const);
assert<Equals<typeof v2, 2>>();

assert<Equals<L.Last<number[]>, number | undefined>>();
const v3 = L.last([2, 6, 3]);
assert<Equals<typeof v3, number | undefined>>();
