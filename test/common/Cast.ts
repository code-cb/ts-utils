import { assert, Cast, Equals } from 'common';

describe(`Cast`, () => {
  it(`works`, () => {
    assert<Equals<Cast<'42', string>, '42'>>();
    assert<Equals<Cast<'42', number>, number>>();
  });
});
