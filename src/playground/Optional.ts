import { assert, Equals, Optional } from '../index.js';

assert<Equals<Optional<number>, number | undefined>>();
