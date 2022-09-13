import { assert, Equals } from '../../src/common';
import * as O from '../../src/object';

interface Obj {
  a: number;
  b: string;
  c?: boolean;
}

assert<Equals<O.Value<Obj>, number | string | boolean | undefined>>();
assert<Equals<O.Value<Obj, 'a' | 'c'>, number | boolean | undefined>>();
