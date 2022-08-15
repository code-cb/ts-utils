import { assert, Equals, Maybe } from '../../src/common/index.js';

assert<Equals<Maybe<string>, string | undefined | null>>();
