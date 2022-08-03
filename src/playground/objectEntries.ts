import { assert, Equals, ObjectEntries, objectEntries } from '../index.js';

interface O {
  a: number;
  d?: () => Promise<number>;
}
assert<
  Equals<
    ObjectEntries<O>,
    ['a', number] | ['d', (() => Promise<number>) | undefined]
  >
>();

const o = {
  a: 1,
  b: () => Promise.resolve(2),
};
const entries = objectEntries(o);
assert<Equals<typeof entries, ['a', number] | ['b', () => Promise<number>]>>();
