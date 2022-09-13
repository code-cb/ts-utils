import { assert, Awaitable, Equals } from '../../src/common';

assert<Equals<Awaitable<string>, string | Promise<string>>>();
assert<Equals<Awaited<Awaitable<string>>, string>>();
