import * as B from '../../src/boolean/index.js';
import { assert, Equals } from '../../src/common/index.js';

assert<Equals<B.Xor<true, true>, false>>();
assert<Equals<B.Xor<true, false>, true>>();
assert<Equals<B.Xor<false, true>, true>>();
assert<Equals<B.Xor<false, false>, false>>();
assert<Equals<B.Xor<boolean, true>, boolean>>();
assert<Equals<B.Xor<true, boolean>, boolean>>();
assert<Equals<B.Xor<boolean, false>, boolean>>();
assert<Equals<B.Xor<false, boolean>, boolean>>();
