import { Not } from '../../sources/boolean';
import { assert, Assignable } from '../../sources/common';
import * as N from '../../sources/number';

assert<Assignable<523, N.Numeric>>();
assert<Assignable<4239n, N.Numeric>>();
assert<Not<Assignable<'123', N.Numeric>>>();
