import { assert, Equals, Optional } from '../../src/index.js';

assert<Equals<Optional<number>, number | undefined>>();
