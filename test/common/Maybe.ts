import { asMaybe, assert, Equals, Maybe } from 'common';

describe(`Maybe`, () => {
  it(`works`, () => {
    assert<Equals<Maybe<string>, string | undefined | null>>();
  });
});

describe(`asMaybe`, () => {
  it(`works`, () => {
    const getDate = () => new Date();
    const d = asMaybe(getDate());
    assert<Equals<typeof d, Date | undefined | null>>();
  });
});
