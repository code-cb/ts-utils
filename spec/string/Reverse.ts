import { assert, Equals } from 'common';
import * as S from 'string';

assert<Equals<S.Reverse<''>, ''>>();
assert<Equals<S.Reverse<'a'>, 'a'>>();
assert<Equals<S.Reverse<'abbccc'>, 'cccbba'>>();
assert<Equals<S.Reverse<string>, string>>();
