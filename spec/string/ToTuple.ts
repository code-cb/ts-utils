import { assert, Equals } from '../../sources/common';
import * as S from '../../sources/string';

assert<Equals<S.ToTuple<''>, []>>();
assert<Equals<S.ToTuple<'a'>, ['a']>>();
assert<Equals<S.ToTuple<'abbccc'>, ['a', 'b', 'b', 'c', 'c', 'c']>>();
assert<Equals<S.ToTuple<string>, string[]>>();