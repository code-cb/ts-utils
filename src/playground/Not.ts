import { assert, Equals, Not } from '../index.js';

assert<Equals<Not<true>, false>>();
assert<Equals<Not<false>, true>>();
assert<Equals<Not<boolean>, boolean>>();

type Not2<T extends boolean> = Equals<T, true> extends true
  ? false
  : Equals<T, false> extends true
  ? true
  : never;
assert<Equals<Not2<true>, false>>();
assert<Equals<Not2<false>, true>>();
assert<Equals<Not2<boolean>, never>>();
