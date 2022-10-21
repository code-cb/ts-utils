import { assert, Equals, isNonNullable } from 'common';

describe(`isNonNullable`, () => {
  it(`works`, () => {
    const list = [true, false, undefined, null, 1, 0, -1, 'a', ''] as const;
    const result = list.filter(isNonNullable);
    assert<Equals<typeof result, (boolean | 1 | 0 | -1 | 'a' | '')[]>>();
    expect(result).toEqual([true, false, 1, 0, -1, 'a', '']);
  });
});
