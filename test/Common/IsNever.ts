import * as B from '../../src/boolean';
import { assert, IsNever } from '../../src/common';

assert<IsNever<never>>();
assert<
  B.Not<
    IsNever<
      number | string | boolean | object | undefined | null | bigint | symbol
    >
  >
>();
assert<B.Not<IsNever<unknown>>>();
assert<B.Not<IsNever<any>>>();
