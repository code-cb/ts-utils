import * as O from '../../src/object/index.js';
import { assert, Equals } from '../../src/common/index.js';

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
    // @ts-expect-error
    O.OmitStrict<Obj, 'c' | 'd' | 'e'>,
    { a: number; b: string | undefined }
  >
>();
