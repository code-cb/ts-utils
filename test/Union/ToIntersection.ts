import { assert, Equals } from '../../src/common';
import * as U from '../../src/union';

assert<
  Equals<
    U.ToIntersection<{ a: number } | { b: boolean }>,
    { a: number } & { b: boolean }
  >
>();
