import { assert, Equals } from '../../sources/common';
import * as S from '../../sources/string';

assert<Equals<S.Reverse<''>, ''>>();
assert<Equals<S.Reverse<'a'>, 'a'>>();
assert<Equals<S.Reverse<'abbccc'>, 'cccbba'>>();
assert<Equals<S.Reverse<string>, string>>();
