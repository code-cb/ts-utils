import { assert, Equals } from '../../src/common';
import * as L from '../../src/list';

const arr1 = [1, 2, 3, 4, 5] as const;
type Arr1 = typeof arr1;

const v1 = L.at(arr1, 0);
assert<Equals<typeof v1, 1>>();
assert<Equals<L.At<Arr1, 0>, 1>>();

const v2 = L.at(arr1, 2);
assert<Equals<typeof v2, 3>>();
assert<Equals<L.At<Arr1, 2>, 3>>();

const v3 = L.at(arr1, 4);
assert<Equals<typeof v3, 5>>();
assert<Equals<L.At<Arr1, 4>, 5>>();

const v4 = L.at(arr1, 6);
assert<Equals<typeof v4, undefined>>();
assert<Equals<L.At<Arr1, 6>, undefined>>();

const v5 = L.at(arr1, -1);
assert<Equals<typeof v5, 5>>();
assert<Equals<L.At<Arr1, -1>, 5>>();

const v6 = L.at(arr1, -4);
assert<Equals<typeof v6, 2>>();
assert<Equals<L.At<Arr1, -4>, 2>>();

const v7 = L.at(arr1, -7);
assert<Equals<typeof v7, undefined>>();
assert<Equals<L.At<Arr1, -7>, undefined>>();

declare const i8: number;
const v8 = L.at(arr1, i8);
assert<Equals<typeof v8, 1 | 2 | 3 | 4 | 5 | undefined>>();
assert<Equals<L.At<Arr1, number>, 1 | 2 | 3 | 4 | 5 | undefined>>();
