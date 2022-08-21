import * as B from '../../src/boolean/index.js';
import { assert, IsUnknown } from '../../src/common/index.js';

assert<IsUnknown<unknown>>();
assert<
  B.Not<
    IsUnknown<
      number | string | boolean | object | undefined | null | bigint | symbol
    >
  >
>();
assert<B.Not<IsUnknown<any>>>();
assert<B.Not<IsUnknown<never>>>();
