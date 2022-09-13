import { _Str } from '../../sources/boolean/_Str';
import { assert, Equals } from '../../sources/common';

assert<Equals<_Str<true>, 'true'>>();
assert<Equals<_Str<false>, 'false'>>();
assert<Equals<_Str<boolean>, 'true' | 'false'>>();
