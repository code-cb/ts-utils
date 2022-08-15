import { _Str } from '../../src/boolean/_Str.js';
import { assert, Equals } from '../../src/common/index.js';

assert<Equals<_Str<true>, 'true'>>();
assert<Equals<_Str<false>, 'false'>>();
assert<Equals<_Str<boolean>, 'true' | 'false'>>();
