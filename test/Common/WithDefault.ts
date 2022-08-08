import { assert, Equals, WithDefault } from '../../src/index.js';

interface Obj {
  a: number;
  b?: string;
}
assert<Equals<WithDefault<Obj>, { default: Obj }>>();
