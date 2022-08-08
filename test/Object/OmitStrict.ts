import { assert, Equals, O } from '../../src/index.js';

interface Obj {
  a: number;
  b: string | undefined;
  c: boolean;
  d?: Function;
}

assert<
  Equals<Omit<Obj, 'c' | 'd' | 'e'>, { a: number; b: string | undefined }>
>();
assert<
  Equals<
    // @ts-expect-error: Type '"e"' is not assignable to type 'keyof Obj'
    O.OmitStrict<Obj, 'c' | 'd' | 'e'>,
    { a: number; b: string | undefined }
  >
>();
