import { assert, Equals } from '../../sources/common';
import * as S from '../../sources/string';

assert<Equals<S.Replace<'abacadaea', '', ''>, 'abacadaea'>>();
assert<Equals<S.Replace<'@b@c@d@e@', '', ''>, '@b@c@d@e@'>>();
assert<Equals<S.Replace<'abacadaea', 'a', ''>, 'bacadaea'>>();
assert<Equals<S.Replace<'abacadaea', 'a', 'aa'>, 'aabacadaea'>>();
assert<Equals<S.Replace<'abacadaea', 'a', '.'>, '.bacadaea'>>();
assert<Equals<S.Replace<'', '', '.'>, '.'>>();
assert<Equals<S.Replace<'a', '', '.'>, '.a'>>();
assert<Equals<S.Replace<'@', '', '.'>, '.@'>>();
assert<Equals<S.Replace<'abc', '', '.'>, '.abc'>>();
assert<Equals<S.Replace<'@bc', '', '.'>, '.@bc'>>();
assert<
  Equals<
    S.Replace<'Hello $1, Welcome $1 to the club', '$1', 'Peter'>,
    'Hello Peter, Welcome $1 to the club'
  >
>();

assert<Equals<S.ReplaceAll<'abacadaea', '', ''>, 'abacadaea'>>();
assert<Equals<S.ReplaceAll<'@b@c@d@e@', '', ''>, '@b@c@d@e@'>>();
assert<Equals<S.ReplaceAll<'abacadaea', 'a', ''>, 'bcde'>>();
assert<Equals<S.ReplaceAll<'abacadaea', 'a', '.'>, '.b.c.d.e.'>>();
assert<Equals<S.ReplaceAll<'abacadaea', 'a', 'aa'>, 'aabaacaadaaeaa'>>();
assert<Equals<S.ReplaceAll<'', '', '.'>, '.'>>();
assert<Equals<S.ReplaceAll<'a', '', '.'>, '.a.'>>();
assert<Equals<S.ReplaceAll<'@', '', '.'>, '.@.'>>();
assert<Equals<S.ReplaceAll<'abc', '', '.'>, '.a.b.c.'>>();
assert<Equals<S.ReplaceAll<'@bc', '', '.'>, '.@.b.c.'>>();
assert<
  Equals<
    S.ReplaceAll<'Hello $1, Welcome $1 to the club', '$1', 'Peter'>,
    'Hello Peter, Welcome Peter to the club'
  >
>();
