import { assert, Equals, U } from '../../src/index.js';

assert<Equals<U.Pop<1 | 2 | 3>, 1 | 2>>();
