import * as O from '../../src/object/index.js';
import { assert, Equals } from '../../src/common/index.js';

interface Obj {
  a: number;
  b: string;
  c(): void;
  d?: () => Promise<any>;
}

assert<Equals<O.MethodNames<Obj>, 'c'>>();
assert<Equals<O.MethodNames<Required<Obj>>, 'c' | 'd'>>();
