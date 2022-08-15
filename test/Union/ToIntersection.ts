import * as U from '../../src/union/index.js';
import { assert, Equals } from '../../src/common/index.js';

assert<
  Equals<
    U.ToIntersection<{ a: number } | { b: boolean }>,
    { a: number } & { b: boolean }
  >
>();
