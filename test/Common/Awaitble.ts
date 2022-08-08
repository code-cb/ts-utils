import { assert, Awaitable, Equals } from '../../src/index.js';

assert<Equals<Awaitable<string>, string | Promise<string>>>();
assert<Equals<Awaited<Awaitable<string>>, string>>();
