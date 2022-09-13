import { Not } from 'boolean';
import { assert, Assignable } from 'common';
import * as N from 'number';

assert<Assignable<523, N.Numeric>>();
assert<Assignable<4239n, N.Numeric>>();
assert<Not<Assignable<'123', N.Numeric>>>();
