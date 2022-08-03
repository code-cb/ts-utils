import { assert, Equals, Objectify } from '../index.js';

assert<Equals<Objectify<0, 1, ['a', 1] | ['b', 2]>, { a: 1; b: 2 }>>();
assert<
  Equals<
    Objectify<'k', 'v', { k: 'a'; v: 1 } | { k: 'b'; v: 2 } | { k: 'c'; v: 3 }>,
    { a: 1; b: 2; c: 3 }
  >
>();
