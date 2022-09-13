import * as B from '../../sources/boolean';
import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

interface Obj1 {
  p1: string;
  p2?: string;
  p3?: number;
  p4: boolean | undefined;
}
assert<Equals<O.RequiredKey<Obj1>, 'p1' | 'p4'>>();
assert<O.HasRequiredKey<Obj1>>();

interface Obj2 {
  p1?: string;
  p2?: number;
}
assert<Equals<O.RequiredKey<Obj2>, never>>();
assert<B.Not<O.HasRequiredKey<Obj2>>>();
