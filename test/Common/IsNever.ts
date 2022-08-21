import * as B from '../../src/boolean/index.js';
import { assert, IsNever } from '../../src/common/index.js';

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
