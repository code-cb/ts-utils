import * as B from '../../src/boolean/index.js';
import * as O from '../../src/object/index.js';
import { assert, Equals } from '../../src/common/index.js';

interface Obj1 {
  p1: string;
  p2?: string;
  p3?: number;
  p4: boolean | undefined;
}
assert<Equals<O.OptionalKey<Obj1>, 'p2' | 'p3'>>();
assert<O.HasOptionalKey<Obj1>>();

interface Obj2 {
  p1: string;
  p2: number;
}
assert<Equals<O.OptionalKey<Obj2>, never>>();
assert<B.Not<O.HasOptionalKey<Obj2>>>();
