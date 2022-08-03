import { assert, Equals, OptionalKey } from '../index.js';

type Obj = {
  p1: string;
  p2?: string;
  p3?: number;
  p4: boolean | undefined;
};
assert<Equals<OptionalKey<Obj>, 'p2' | 'p3'>>();
