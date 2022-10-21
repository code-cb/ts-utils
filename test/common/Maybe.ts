import { asMaybe, assert, Equals, Maybe } from 'common';

describe(`Maybe and asMaybe`, () => {
  it(`works`, () => {
    assert<Equals<Maybe<string>, string | undefined | null>>();

    const getDate = () => new Date();
    const d = asMaybe(getDate());
    assert<Equals<typeof d, Date | undefined | null>>();
  });
});
