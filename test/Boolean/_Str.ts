import { _Str } from '../../src/Boolean/_Str.js';
import { assert, Equals } from '../../src/index.js';

assert<Equals<_Str<true>, 'true'>>();
assert<Equals<_Str<false>, 'false'>>();
assert<Equals<_Str<boolean>, 'true' | 'false'>>();
