import { assert, Equals } from 'common';
import * as S from 'string';

assert<Equals<S.First<''>, undefined>>();
assert<Equals<S.First<'a'>, 'a'>>();
assert<Equals<S.First<'efg'>, 'e'>>();
assert<Equals<S.First<string>, string>>();
