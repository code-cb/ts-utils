import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

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