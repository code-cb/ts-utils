import { assert, Equals } from '../../sources/common';
import * as U from '../../sources/union';

assert<
  Equals<
    U.ToIntersection<{ a: number } | { b: boolean }>,
    { a: number } & { b: boolean }
  >
>();
