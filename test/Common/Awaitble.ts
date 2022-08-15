import { assert, Awaitable, Equals } from '../../src/common/index.js';

assert<Equals<Awaitable<string>, string | Promise<string>>>();
assert<Equals<Awaited<Awaitable<string>>, string>>();
