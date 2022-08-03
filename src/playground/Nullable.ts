import { assert, Equals, Nullable } from '../index.js';

assert<Equals<Nullable<string>, string | null>>();
