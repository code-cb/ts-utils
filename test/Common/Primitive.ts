import { assert, Equals, Primitive } from '../../src/index.js';

assert<
  Equals<
    Primitive,
    string | number | boolean | null | undefined | symbol | bigint
  >
>();
