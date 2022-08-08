import { assert, IsEqual, O } from '../../src/index.js';

assert<IsEqual<O.Unite<{ a: 1; b: 2 }>, { a: 1; b: 2 }>>();
assert<IsEqual<O.Unite<{ a: 1 } & { b: 2 }>, { a: 1; b: 2 }>>();
