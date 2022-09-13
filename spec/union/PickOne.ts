import * as B from '../../sources/boolean';
import { assert, Assignable, Equals, IsNever } from '../../sources/common';
import * as U from '../../sources/union';

type Union = { a: number } | { b: boolean } | { c: string };
type P1 = U.PickOne<Union>;
assert<Assignable<P1, Union>>();
assert<B.Not<Equals<P1, Union>>>();
assert<B.Not<IsNever<P1>>>();

type Obj1 = { a: 1; b: 2; c: 3 };
type K1 = U.PickOne<keyof Obj1>;
assert<Assignable<K1, keyof Obj1>>();
assert<B.Not<Equals<K1, keyof Obj1>>>();
assert<B.Not<IsNever<K1>>>();
