import { assert, Equals, F } from '../../src/index.js';

assert<Equals<F.AnyFunc, (...args: any[]) => any>>();
