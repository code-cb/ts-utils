import { assert, Equals } from '../../src/common';
import * as S from '../../src/string';

assert<Equals<S.First<''>, undefined>>();
assert<Equals<S.First<'a'>, 'a'>>();
assert<Equals<S.First<'efg'>, 'e'>>();
assert<Equals<S.First<string>, string>>();
