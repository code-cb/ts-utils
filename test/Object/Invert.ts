import * as O from '../../src/object/index.js';
import { assert, IsEqual } from '../../src/common/index.js';

assert<IsEqual<O.Invert<{ a: 1; b: 2 }>, { '1': 'a'; '2': 'b' }>>();
