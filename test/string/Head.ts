import { assert, Equals } from 'common';
import * as S from 'string';

assert<Equals<S.Head<'123'>, '12'>>();
assert<Equals<S.Head<'12'>, '1'>>();
assert<Equals<S.Head<'1'>, ''>>();
assert<Equals<S.Head<''>, ''>>();
assert<Equals<S.Head<string>, string>>();
