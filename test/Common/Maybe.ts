import { assert, Equals, Maybe } from '../../src/index.js';

assert<Equals<Maybe<string>, string | undefined | null>>();
