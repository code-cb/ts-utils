import { assert, Equals, Primitive } from 'common';

assert<
  Equals<
    Primitive,
    string | number | boolean | null | undefined | symbol | bigint
  >
>();
