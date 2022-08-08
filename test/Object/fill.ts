import { assert, Equals, O } from '../../src/index.js';

interface Obj {
  a: number;
  b: string | undefined;
  c: boolean;
  d?: Function;
}

assert<
  Equals<
    O.Fill<Obj, { a: number; b: string }>,
    { a?: number; b?: string; c: boolean; d?: Function }
  >
>();

const o = O.fill<Obj>()({ b: 'b' })({ a: 1, c: true });
assert<Equals<typeof o, Obj>>();
