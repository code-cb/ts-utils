import { assert, Equals } from '../../src/common';
import * as S from '../../src/string';

assert<Equals<S.Last<'12'>, '2'>>();
assert<Equals<S.Last<'1'>, '1'>>();
assert<Equals<S.Last<''>, undefined>>();
assert<Equals<S.Last<string>, string>>();
