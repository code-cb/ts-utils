import { assert, Equals, If } from 'common';

describe(`If`, () => {
  it(`works`, () => {
    assert<Equals<If<true, 'a', 'b'>, 'a'>>();
    assert<Equals<If<false, 'a', 'b'>, 'b'>>();
  });
});
