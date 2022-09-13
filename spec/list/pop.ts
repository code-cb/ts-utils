import { assert, Equals } from '../../sources/common';
import * as L from '../../sources/list';

const v1 = L.pop(L.tuple(1, 'a', false));
assert<Equals<typeof v1, boolean>>();

const v2 = L.pop([1, 2, 3]);
assert<Equals<typeof v2, number | undefined>>();

const v3 = L.pop([]);
assert<Equals<typeof v3, undefined>>();
