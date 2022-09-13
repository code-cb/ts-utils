import * as B from 'boolean';
import { assert, Assignable, Equals, IsNever } from 'common';
import * as U from 'union';

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
