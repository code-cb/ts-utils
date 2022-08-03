import { assert, Equals, RequiredKey } from '../index.js';

type Obj = {
  p1: string;
  p2?: string;
  p3?: number;
  p4: boolean | undefined;
};
assert<Equals<RequiredKey<Obj>, 'p1' | 'p4'>>();
