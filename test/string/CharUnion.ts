import { assert, Equals } from '../../src/common';
import * as S from '../../src/string';

assert<Equals<S.CharUnion<''>, never>>();
assert<Equals<S.CharUnion<'a'>, 'a'>>();
assert<Equals<S.CharUnion<'abbccc'>, 'a' | 'b' | 'c'>>();
assert<Equals<S.CharUnion<string>, string>>();
