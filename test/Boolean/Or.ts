import { assert, B, Equals } from '../../src/index.js';

assert<Equals<B.Or<true, true>, true>>();
assert<Equals<B.Or<true, false>, true>>();
assert<Equals<B.Or<false, true>, true>>();
assert<Equals<B.Or<false, false>, false>>();
assert<Equals<B.Or<boolean, true>, true>>();
assert<Equals<B.Or<true, boolean>, true>>();
assert<Equals<B.Or<boolean, false>, boolean>>();
assert<Equals<B.Or<false, boolean>, boolean>>();
