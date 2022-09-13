import { assert, Equals } from '../../sources/common';
import * as L from '../../sources/list';

assert<Equals<L.ArrayOrSingle<number>, number | number[]>>();
assert<Equals<L.ReadonlyArrayOrSingle<number>, number | readonly number[]>>();
assert<Equals<L.ElementOrSingle<L.ArrayOrSingle<Date>>, Date>>();
assert<Equals<L.ElementOrSingle<L.ReadonlyArrayOrSingle<symbol>>, symbol>>();
