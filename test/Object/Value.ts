import { assert, Equals, O } from '../../src/index.js';

interface Obj {
  a: number;
  b: string;
  c?: boolean;
}

assert<Equals<O.Value<Obj>, number | string | boolean | undefined>>();
assert<Equals<O.Value<Obj, 'a' | 'c'>, number | boolean | undefined>>();
