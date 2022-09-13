import { assert, Equals } from '../../sources/common';
import * as S from '../../sources/string';

assert<Equals<S.Length<''>, 0>>();
assert<Equals<S.Length<'a'>, 1>>();
assert<Equals<S.Length<'abbccc'>, 6>>();
assert<Equals<S.Length<string>, number>>();
