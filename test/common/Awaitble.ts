import { assert, Awaitable, Equals } from 'common';

describe(`Awaitable`, () => {
  it(`works`, () => {
    assert<Equals<Awaitable<string>, string | Promise<string>>>();
    assert<Equals<Awaited<Awaitable<string>>, string>>();
  });
});
