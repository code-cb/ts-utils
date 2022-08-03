import { assert, Equals, Unionize } from '../index.js';

assert<Equals<Unionize<{ a: 1; b: 2 }>, { k: 'a'; v: 1 } | { k: 'b'; v: 2 }>>();
assert<
  Equals<
    Unionize<{ a: 1; b?: 2 }>,
    { k: 'a'; v: 1 } | { k: 'b'; v: 2 | undefined }
  >
>();
assert<
  Equals<
    Unionize<{ a: 1; b: 2; c: 3 }, 0, 1>,
    { 0: 'a'; 1: 1 } | { 0: 'b'; 1: 2 } | { 0: 'c'; 1: 3 }
  >
>();
