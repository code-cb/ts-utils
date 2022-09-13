import { assert, IsEqual } from '../../src/common';
import * as O from '../../src/object';

assert<IsEqual<O.Invert<{ a: 1; b: 2 }>, { '1': 'a'; '2': 'b' }>>();
