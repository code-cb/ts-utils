import { assert, Equals } from '../../src/common';
import * as O from '../../src/object';

interface Obj {
  a: number;
  b: string;
  c(): void;
  d?: () => Promise<any>;
}

assert<Equals<O.MethodNames<Obj>, 'c'>>();
assert<Equals<O.MethodNames<Required<Obj>>, 'c' | 'd'>>();
