import * as B from '../../sources/boolean';
import { assert, Assignable, Equals, IsNever } from '../../sources/common';
import * as U from '../../sources/union';

type Obj1 = { a: 1; b: 2; c: 3 };
type T1 = U.ToTuple<keyof Obj1>;
type PossibleTuples =
  | ['a', 'b', 'c']
  | ['a', 'c', 'b']
  | ['b', 'a', 'c']
  | ['b', 'c', 'a']
  | ['c', 'a', 'b']
  | ['c', 'b', 'a'];
assert<Assignable<T1, PossibleTuples>>();
assert<B.Not<Equals<T1, PossibleTuples>>>();
assert<B.Not<IsNever<T1>>>();
