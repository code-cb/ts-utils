import { assert, Equals, Optional } from '../../src/common/index.js';

assert<Equals<Optional<number>, number | undefined>>();
