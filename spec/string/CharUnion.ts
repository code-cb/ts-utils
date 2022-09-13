import { assert, Equals } from '../../sources/common';
import * as S from '../../sources/string';

assert<Equals<S.CharUnion<''>, never>>();
assert<Equals<S.CharUnion<'a'>, 'a'>>();
assert<Equals<S.CharUnion<'abbccc'>, 'a' | 'b' | 'c'>>();
assert<Equals<S.CharUnion<string>, string>>();
