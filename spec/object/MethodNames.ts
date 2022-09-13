import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

interface Obj {
  a: number;
  b: string;
  c(): void;
  d?: () => Promise<any>;
}

assert<Equals<O.MethodNames<Obj>, 'c'>>();
assert<Equals<O.MethodNames<Required<Obj>>, 'c' | 'd'>>();
