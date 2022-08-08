import { assert, Equals, O } from '../../src/index.js';

type Obj = {
  p1: string;
  p2?: string;
  p3?: number;
  p4: boolean | undefined;
};
assert<Equals<O.OptionalKey<Obj>, 'p2' | 'p3'>>();
