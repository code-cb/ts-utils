import * as B from '../../src/boolean/index.js';
import {
  assert,
  Assignable,
  Equals,
  Type,
  UnwrapType,
} from '../../src/common/index.js';

type Email = Type<string, 'email'>;
assert<B.Not<Equals<Email, string>>>();
assert<Assignable<Email, string>>();
assert<B.Not<Assignable<string, Email>>>();
assert<Equals<UnwrapType<Email>, string>>();
