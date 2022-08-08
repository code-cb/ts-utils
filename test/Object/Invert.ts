import { assert, IsEqual, O } from '../../src/index.js';

assert<IsEqual<O.Invert<{ a: 1; b: 2 }>, { '1': 'a'; '2': 'b' }>>();
