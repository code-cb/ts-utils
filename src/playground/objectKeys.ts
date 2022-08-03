import { assert, Equals, objectKeys } from '../index.js';

const keys = objectKeys({ a: 1, b: 2, c: 3 });
assert<Equals<typeof keys, ('a' | 'b' | 'c')[]>>();
