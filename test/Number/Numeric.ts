import { Not } from '../../src/boolean';
import { assert, Assignable } from '../../src/common';
import * as N from '../../src/number';

assert<Assignable<523, N.Numeric>>();
assert<Assignable<4239n, N.Numeric>>();
assert<Not<Assignable<'123', N.Numeric>>>();
