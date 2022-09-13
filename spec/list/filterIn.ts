import { assert, Equals } from '../../sources/common';
import * as L from '../../sources/list';

const arr1 = [1, 2, 3, 4, 5] as const;
type Arr1 = typeof arr1;

assert<Equals<L.FilterIn<Arr1, never>, []>>();
const f1 = L.filterIn(arr1, []);
assert<Equals<typeof f1, []>>();

assert<Equals<L.FilterIn<Arr1, 3>, [3]>>();
const f2 = L.filterIn(arr1, 3 as const);
assert<Equals<typeof f2, [3]>>();
const f3 = L.filterIn(arr1, [3] as const);
assert<Equals<typeof f3, [3]>>();

assert<Equals<L.FilterIn<Arr1, 3 | 2 | 5 | 4 | 1>, [1, 2, 3, 4, 5]>>();
const f4 = L.filterIn(arr1, [3, 2, 5, 4, 1]);
assert<Equals<typeof f4, [1, 2, 3, 4, 5]>>();

assert<Equals<L.FilterIn<Arr1, 0 | 6 | 8>, []>>();
const f5 = L.filterIn(arr1, 8 as const);
assert<Equals<typeof f5, []>>();
const f6 = L.filterIn(arr1, [0, 6, 8] as const);
assert<Equals<typeof f6, []>>();

assert<Equals<L.FilterIn<Arr1, number>, [1, 2, 3, 4, 5]>>();
const f7 = L.filterIn(arr1, 1);
assert<Equals<typeof f7, [1, 2, 3, 4, 5]>>(); // Oops! `number[]` is more correct - This should be used with literal types only
const f8 = L.filterIn(arr1, [1, 2, 3]);
assert<Equals<typeof f8, [1, 2, 3, 4, 5]>>(); // Oops! `number[]` is more correct - This should be used with literal types only

assert<Equals<L.FilterIn<readonly number[], 1 | 2 | 3 | 6 | 8>, number[]>>();
const f9 = L.filterIn([1, 2, 3, 4, 5], [1, 2, 3, 6, 8] as const);
assert<Equals<typeof f9, number[]>>();
