import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

interface Obj {
  a: number;
  d?: () => Promise<number>;
}
assert<
  Equals<
    O.Entry<Obj>,
    ['a', number] | ['d', (() => Promise<number>) | undefined]
  >
>();

const o = {
  a: 1,
  b: () => Promise.resolve(2),
};
const entries = O.entries(o);
assert<
  Equals<typeof entries, (['a', number] | ['b', () => Promise<number>])[]>
>();
