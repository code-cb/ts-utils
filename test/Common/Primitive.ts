import { assert, Equals, Primitive } from '../../src/common/index.js';

assert<
  Equals<
    Primitive,
    string | number | boolean | null | undefined | symbol | bigint
  >
>();
