import * as B from '../../sources/boolean';
import { assert, IsNever } from '../../sources/common';

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
