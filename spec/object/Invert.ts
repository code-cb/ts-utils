import { assert, IsEqual } from '../../sources/common';
import * as O from '../../sources/object';

assert<IsEqual<O.Invert<{ a: 1; b: 2 }>, { '1': 'a'; '2': 'b' }>>();
