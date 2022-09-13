import { assert, Equals } from '../../sources/common';
import * as S from '../../sources/string';

assert<Equals<S.First<''>, undefined>>();
assert<Equals<S.First<'a'>, 'a'>>();
assert<Equals<S.First<'efg'>, 'e'>>();
assert<Equals<S.First<string>, string>>();
