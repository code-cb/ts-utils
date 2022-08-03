import { assert, Equals, MethodNames } from '../index.js';

interface O {
  a: number;
  b: string;
  c(): void;
  d?: () => Promise<any>;
}

assert<Equals<MethodNames<O>, 'c'>>();
assert<Equals<MethodNames<Required<O>>, 'c' | 'd'>>();
