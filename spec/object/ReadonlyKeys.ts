import { assert, Equals } from 'common';
import * as O from 'object';

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
