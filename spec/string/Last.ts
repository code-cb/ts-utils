import { assert, Equals } from 'common';
import * as S from 'string';

assert<Equals<S.Last<'12'>, '2'>>();
assert<Equals<S.Last<'1'>, '1'>>();
assert<Equals<S.Last<''>, undefined>>();
assert<Equals<S.Last<string>, string>>();
