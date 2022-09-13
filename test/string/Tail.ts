import { assert, Equals } from '../../src/common';
import * as S from '../../src/string';

assert<Equals<S.Tail<''>, ''>>();
assert<Equals<S.Tail<'a'>, ''>>();
assert<Equals<S.Tail<'cd'>, 'd'>>();
assert<Equals<S.Tail<'xyz'>, 'yz'>>();
assert<Equals<S.Tail<string>, string>>();
