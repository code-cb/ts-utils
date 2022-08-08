import { exclude, assert, Equals } from '../../src/index.js';

const arr1 = ['a', 'b', 'c', 'd'] as const;
const arr2 = arr1.filter(exclude('a', 'b'));
assert<Equals<typeof arr2, ('c' | 'd')[]>>();
