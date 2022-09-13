import * as B from 'boolean';
import { assert, IsUnknown } from 'common';

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
