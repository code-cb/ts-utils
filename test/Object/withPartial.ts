import { assert, Equals, O } from '../../src/index.js';

interface Obj {
  a: number;
  b: string | undefined;
  c: boolean;
  d?: Function;
}

assert<
  Equals<
    O.WithPartial<Obj, { a: number; b: string }>,
    { a?: number; b?: string; c: boolean; d?: Function }
  >
>();

const o = O.withPartial<Obj>()({ b: 'b' })({ a: 1, c: true });
assert<Equals<typeof o, Obj>>();
