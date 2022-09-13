import { assert, Equals } from 'common';
import * as U from 'union';

assert<
  Equals<
    U.ToIntersection<{ a: number } | { b: boolean }>,
    { a: number } & { b: boolean }
  >
>();
