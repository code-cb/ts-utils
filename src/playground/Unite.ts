import { assert, Equals, Unite } from '../index.js';

assert<Equals<Unite<{ a: 1; b: 2 }>, { a: 1; b: 2 }>>();
assert<Equals<Unite<{ a: 1 } & { b: 2 }>, { a: 1; b: 2 }>>();
