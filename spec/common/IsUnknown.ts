import * as B from '../../sources/boolean';
import { assert, IsUnknown } from '../../sources/common';

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
