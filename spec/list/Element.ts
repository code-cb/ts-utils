import { assert, Equals, id } from 'common';
import * as L from 'list';

const l1 = [1, 2, 3] as const;
assert<Equals<L.Element<typeof l1>, 1 | 2 | 3>>();

const l2 = ['a', 'b', 'c'];
assert<Equals<L.Element<typeof l2>, string>>();

const l3 = (function* () {
  let n = 0;
  while (true) {
    yield n++;
  }
})();
assert<Equals<L.Element<typeof l3>, number>>();

const l4 = (async function* () {
  for await (const item of l3) {
    yield item;
  }
})();
assert<Equals<L.Element<typeof l4>, number>>();

const l5 = new Set([/\w+/, /\d+/]);
assert<Equals<L.Element<typeof l5>, RegExp>>();

const l6 = new WeakSet([new Date(), new Date()]);
// @ts-expect-error
assert<Equals<L.Element<typeof l6>, never>>();

const l7 = new Map([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
]);
assert<Equals<L.Element<typeof l7>, [number, string]>>();

const l8 = new WeakMap([
  [new Date(), 'a'],
  [new Date(), 'b'],
]);
// @ts-expect-error
assert<Equals<L.Element<typeof l8>, never>>();

type UniOp = (x: number) => number;
const l9 = {
  length: 3,
  [0]: id<UniOp>((n: number) => n * 5),
  [1]: id<UniOp>((n: number) => n ^ 2),
};
assert<Equals<L.Element<typeof l9>, UniOp>>();

// @ts-expect-error
assert<Equals<L.Element<{ a: number; b: string }>, never>>();
