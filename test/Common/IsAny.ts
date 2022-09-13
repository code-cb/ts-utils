import * as B from '../../src/boolean';
import { assert, IsAny } from '../../src/common';

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
