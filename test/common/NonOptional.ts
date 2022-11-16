import { asNonOptional, assert, Equals, NonOptional } from 'common';

describe(`NonOptional and asNonOptional`, () => {
  it(`works`, () => {
    assert<Equals<NonOptional<string | undefined>, string>>();
    assert<Equals<NonOptional<object | null | undefined>, object | null>>();

    const getValue = (list: number[], index: number) => {
      if (index < list.length) return asNonOptional(list[index]);
      return null;
    };
    const v = getValue([1, 2, 3], 4);
    assert<Equals<typeof v, number | null>>();
  });
});
