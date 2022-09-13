import { assert, Equals, Primitive } from '../../sources/common';

assert<
  Equals<
    Primitive,
    string | number | boolean | null | undefined | symbol | bigint
  >
>();
