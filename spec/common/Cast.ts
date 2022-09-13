import { assert, Cast, Equals } from '../../sources/common';

assert<Equals<Cast<'42', string>, '42'>>();
assert<Equals<Cast<'42', number>, number>>();
