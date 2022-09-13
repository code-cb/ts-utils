import { assert, Equals } from 'common';
import * as S from 'string';

assert<Equals<S.Join<[], 'aaa'>, ''>>();
assert<Equals<S.Join<['a', 'b', 'c'], ''>, 'abc'>>();
assert<Equals<S.Join<[47, 245, 893], '-'>, '47-245-893'>>();
assert<Equals<S.Join<[400n, 50n], '+'>, '400+50'>>();
assert<Equals<S.Join<['a', 'bb', 'ccc', 'dddd'], '.'>, 'a.bb.ccc.dddd'>>();
assert<Equals<S.Join<[true, false, true], ' or '>, 'true or false or true'>>();
assert<Equals<S.Join<number[], '+'>, string>>();
assert<Equals<S.Join<['a', 'b'], string>, string>>();
assert<Equals<S.Join<[2, number], '&'>, string>>();
