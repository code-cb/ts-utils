import * as B from 'boolean';
import { assert, Equals } from 'common';

assert<Equals<B.Xor<true, true>, false>>();
assert<Equals<B.Xor<true, false>, true>>();
assert<Equals<B.Xor<false, true>, true>>();
assert<Equals<B.Xor<false, false>, false>>();
assert<Equals<B.Xor<boolean, true>, boolean>>();
assert<Equals<B.Xor<true, boolean>, boolean>>();
assert<Equals<B.Xor<boolean, false>, boolean>>();
assert<Equals<B.Xor<false, boolean>, boolean>>();
