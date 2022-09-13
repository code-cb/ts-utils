import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

const sa = Symbol('a');
const sb = Symbol('b');
const o = {
  a: 1,
  b: 2,
  1: '1',
  2: '2',
  [sa]: 'sa',
  [sb]: 'sb',
};

assert<Equals<O.Key<typeof o>, 'a' | 'b' | '1' | '2'>>();
const keys = O.keys(o);
assert<Equals<typeof keys, ('a' | 'b' | '1' | '2')[]>>();
