import { asNullable, assert, Equals, Nullable } from 'common';

describe(`Nullable`, () => {
  it(`works`, () => {
    assert<Equals<Nullable<string>, string | null>>();
  });
});

describe(`asNullable`, () => {
  it(`works`, () => {
    const getDate = () => new Date();
    const d = asNullable(getDate());
    assert<Equals<typeof d, Date | null>>();
  });
});
