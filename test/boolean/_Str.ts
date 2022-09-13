import { _Str } from 'boolean/_Str';
import { assert, Equals } from 'common';

assert<Equals<_Str<true>, 'true'>>();
assert<Equals<_Str<false>, 'false'>>();
assert<Equals<_Str<boolean>, 'true' | 'false'>>();
