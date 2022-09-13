import { assert, Assignable } from '../../sources/common';
import * as O from '../../sources/object';

assert<Assignable<Record<string, unknown>, O.AnyRecord>>();
assert<Assignable<Record<number, unknown>, O.AnyRecord>>();
assert<Assignable<Record<symbol, unknown>, O.AnyRecord>>();

assert<Assignable<Readonly<Record<string, unknown>>, O.AnyReadonlyRecord>>();
assert<Assignable<Readonly<Record<number, unknown>>, O.AnyReadonlyRecord>>();
assert<Assignable<Readonly<Record<symbol, unknown>>, O.AnyReadonlyRecord>>();
