import { assert, Equals, O } from '../../src/index.js';

interface Obj {
  a: number;
  b: string;
  c(): void;
  d?: () => Promise<any>;
}

assert<Equals<O.MethodNames<Obj>, 'c'>>();
assert<Equals<O.MethodNames<Required<Obj>>, 'c' | 'd'>>();
