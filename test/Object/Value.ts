import * as O from '../../src/object/index.js';
import { assert, Equals } from '../../src/common/index.js';

interface Obj {
  a: number;
  b: string;
  c?: boolean;
}

assert<Equals<O.Value<Obj>, number | string | boolean | undefined>>();
assert<Equals<O.Value<Obj, 'a' | 'c'>, number | boolean | undefined>>();
