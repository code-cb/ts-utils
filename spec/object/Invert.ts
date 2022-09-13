import { assert, IsEqual } from 'common';
import * as O from 'object';

assert<IsEqual<O.Invert<{ a: 1; b: 2 }>, { '1': 'a'; '2': 'b' }>>();
