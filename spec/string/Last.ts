import { assert, Equals } from '../../sources/common';
import * as S from '../../sources/string';

assert<Equals<S.Last<'12'>, '2'>>();
assert<Equals<S.Last<'1'>, '1'>>();
assert<Equals<S.Last<''>, undefined>>();
assert<Equals<S.Last<string>, string>>();
