import { assert, B, Equals, O } from '../../src/index.js';

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
