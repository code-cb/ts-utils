import { assert, Equals } from 'common';
import * as L from 'list';

const v1 = L.shift(L.tuple(1, 'a', false));
assert<Equals<typeof v1, number>>();

const v2 = L.shift([1, 2, 3]);
assert<Equals<typeof v2, number | undefined>>();

const v3 = L.shift([]);
assert<Equals<typeof v3, undefined>>();
