import { assert, Equals } from '../../src/common/index.js';
import * as U from '../../src/union/index.js';

assert<Equals<U.Last<{ a: number } | { b: boolean }>, { b: boolean }>>();
