import * as B from '../../src/boolean/index.js';
import { assert, IsAny } from '../../src/common/index.js';

assert<IsAny<any>>();
assert<
  B.Not<
    IsAny<
      number | string | boolean | object | undefined | null | bigint | symbol
    >
  >
>();
assert<B.Not<IsAny<unknown>>>();
assert<B.Not<IsAny<never>>>();
