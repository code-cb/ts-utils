import { assert, Equals, TryCast } from '../../sources/common';

assert<Equals<TryCast<'42', string, unknown>, '42'>>();
assert<Equals<TryCast<'42', number, unknown>, unknown>>();
assert<Equals<TryCast<'42', number>, never>>();