import * as O from '../../src/object/index.js';
import { assert, Equals } from '../../src/common/index.js';

type E = 'a' | 'b' | 'c';

const d1 = O.dictOf<E>()({});
assert<Equals<typeof d1, {}>>();

const d2 = O.dictOf<E>()({ a: 'a', b: 'b' });
assert<Equals<typeof d2, { a: 'a'; b: 'b' }>>();
