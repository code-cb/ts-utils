import { assert, Equals } from 'common';
import * as L from 'list';

assert<Equals<L.Prepend<[2, 3, 4], 1>, [1, 2, 3, 4]>>();

const l1 = L.prepend([1, 2, 3] as const, 'a' as const);
assert<Equals<typeof l1, ['a', 1, 2, 3]>>();

const l2 = L.prepend([1, 2, 3], 'a');
assert<Equals<typeof l2, [string, ...number[]]>>();
