import { assert, Equals, Primitive } from '../../src/common';

assert<
  Equals<
    Primitive,
    string | number | boolean | null | undefined | symbol | bigint
  >
>();
