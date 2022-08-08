import { assert, Equals, U } from '../../src/index.js';

assert<
  Equals<
    U.ToIntersection<{ a: number } | { b: boolean }>,
    { a: number } & { b: boolean }
  >
>();
