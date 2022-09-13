import { assert, Equals } from '../../src/common';
import * as S from '../../src/string';

assert<Equals<S.Reverse<''>, ''>>();
assert<Equals<S.Reverse<'a'>, 'a'>>();
assert<Equals<S.Reverse<'abbccc'>, 'cccbba'>>();
assert<Equals<S.Reverse<string>, string>>();
