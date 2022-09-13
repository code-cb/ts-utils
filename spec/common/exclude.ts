import { assert, Equals, exclude } from 'common';

const arr1 = ['a', 'b', 'c', 'd'] as const;
const arr2 = arr1.filter(exclude('a', 'b'));
assert<Equals<typeof arr2, ('c' | 'd')[]>>();
