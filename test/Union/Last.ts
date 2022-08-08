import { assert, Equals, U } from '../../src/index.js';

assert<Equals<U.Last<{ a: number } | { b: boolean }>, { b: boolean }>>();
