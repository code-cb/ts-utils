import { assert, Equals, Nullable } from '../../src/index.js';

assert<Equals<Nullable<string>, string | null>>();
