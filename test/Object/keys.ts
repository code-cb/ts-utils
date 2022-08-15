import * as O from '../../src/object/index.js';
import { assert, Equals } from '../../src/common/index.js';

const keys = O.keys({ a: 1, b: 2, c: 3 });
assert<Equals<typeof keys, ('a' | 'b' | 'c')[]>>();
