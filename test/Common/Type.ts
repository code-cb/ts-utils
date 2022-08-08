import { assert, Assignable, B, Equals, Type } from '../../src/index.js';

type Email = Type<string, 'email'>;
assert<B.Not<Equals<Email, string>>>();
assert<Assignable<Email, string>>();
assert<B.Not<Assignable<string, Email>>>();
