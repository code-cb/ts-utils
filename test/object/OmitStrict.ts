import { assert, Equals } from 'common';
import * as O from 'object';

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
