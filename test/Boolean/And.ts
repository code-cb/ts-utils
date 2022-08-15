import * as B from '../../src/boolean/index.js';
import { assert, Equals } from '../../src/common/index.js';

assert<Equals<B.And<true, true>, true>>();
assert<Equals<B.And<true, false>, false>>();
assert<Equals<B.And<false, true>, false>>();
assert<Equals<B.And<false, false>, false>>();
assert<Equals<B.And<boolean, true>, boolean>>();
assert<Equals<B.And<true, boolean>, boolean>>();
assert<Equals<B.And<boolean, false>, false>>();
assert<Equals<B.And<false, boolean>, false>>();
