import { assert, Awaitable, Equals } from 'common';

assert<Equals<Awaitable<string>, string | Promise<string>>>();
assert<Equals<Awaited<Awaitable<string>>, string>>();
