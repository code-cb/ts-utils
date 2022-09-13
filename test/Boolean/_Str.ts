import { _Str } from '../../src/boolean/_Str';
import { assert, Equals } from '../../src/common';

assert<Equals<_Str<true>, 'true'>>();
assert<Equals<_Str<false>, 'false'>>();
assert<Equals<_Str<boolean>, 'true' | 'false'>>();
