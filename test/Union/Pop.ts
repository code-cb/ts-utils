import * as U from '../../src/union/index.js';
import { assert, Equals } from '../../src/common/index.js';

assert<Equals<U.Pop<1 | 2 | 3>, 1 | 2>>();
