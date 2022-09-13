import { assert, Equals } from '../../src/common';
import * as O from '../../src/object';

assert<Equals<O.ReadonlyKeys<{ a: number; b: string }>, never>>();
assert<
  Equals<
    O.ReadonlyKeys<{
      readonly a: number;
      b: string;
      readonly c?: boolean;
      d: object;
    }>,
    'a' | 'c'
  >
>();
