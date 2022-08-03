import { assert, Equals, ObjectValue } from '../index.js';

interface O {
  a: number;
  b: string;
  c?: boolean;
}

assert<Equals<ObjectValue<O>, number | string | boolean | undefined>>();
