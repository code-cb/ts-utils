import { assert, Equals } from '../../src/common';
import * as S from '../../src/string';

assert<Equals<S.At<'', 0>, undefined>>();
assert<Equals<S.At<'abc', 0>, 'a'>>();
assert<Equals<S.At<'abc', 3>, undefined>>();
assert<Equals<S.At<'abc', number>, string>>();
assert<Equals<S.At<string, 4>, string>>();
