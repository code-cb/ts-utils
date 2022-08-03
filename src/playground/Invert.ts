import { assert, Equals, Invert } from '../index.js';

assert<Equals<Invert<{ a: 1; b: 2 }>, { 1: 'a'; 2: 'b' }>>();
