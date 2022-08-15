import { assert, Cast, Equals } from '../../src/common/index.js';

assert<Equals<Cast<'42', string>, '42'>>();
assert<Equals<Cast<'42', number>, number>>();
