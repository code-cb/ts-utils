import { assert, Equals } from '../../src/common';
import * as S from '../../src/string';

assert<Equals<S.Split<'', ''>, []>>();
assert<Equals<S.Split<'a', ''>, ['a']>>();
assert<Equals<S.Split<'abbccc', ''>, ['a', 'b', 'b', 'c', 'c', 'c']>>();
assert<Equals<S.Split<'abacad', 'a'>, ['', 'b', 'c', 'd']>>();
assert<Equals<S.Split<'1-22-333-4444', '-'>, ['1', '22', '333', '4444']>>();
assert<Equals<S.Split<'a/bb/ccc/dddd', '/'>, ['a', 'bb', 'ccc', 'dddd']>>();
assert<Equals<S.Split<string, ''>, string[]>>();
assert<Equals<S.Split<'abc', string>, string[]>>();
