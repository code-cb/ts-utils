import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

interface Obj {
  a: number;
  b: string;
  c?: boolean;
}

assert<Equals<O.Value<Obj>, number | string | boolean | undefined>>();
assert<Equals<O.Value<Obj, 'a' | 'c'>, number | boolean | undefined>>();
