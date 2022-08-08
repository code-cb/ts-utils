import { assert, Equals, O } from '../../src/index.js';

const keys = O.keys({ a: 1, b: 2, c: 3 });
assert<Equals<typeof keys, ('a' | 'b' | 'c')[]>>();
