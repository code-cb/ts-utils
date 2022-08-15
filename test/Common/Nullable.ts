import { assert, Equals, Nullable } from '../../src/common/index.js';

assert<Equals<Nullable<string>, string | null>>();
