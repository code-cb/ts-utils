import { asNullable, assert, Equals, Nullable } from 'common';

describe(`Nullable and asNullable`, () => {
  it(`works`, () => {
    assert<Equals<Nullable<string>, string | null>>();
    assert<Equals<Nullable<object | undefined>, object | undefined | null>>();

    const getDate = () => new Date();
    const d = asNullable(getDate());
    assert<Equals<typeof d, Date | null>>();
  });
});
