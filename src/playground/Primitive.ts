import { assert, Equals, Primitive } from '../index.js';

assert<Equals<Primitive, string | number | boolean | null | undefined>>();
