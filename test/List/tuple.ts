import * as L from '../../src/list/index.js';
import { assert, Equals } from '../../src/common/index.js';

const t1 = ['a', 1, false] as const;
assert<Equals<typeof t1, readonly ['a', 1, false]>>();

const t2 = L.tuple('a', 1, false);
assert<Equals<typeof t2, [string, number, boolean]>>();
