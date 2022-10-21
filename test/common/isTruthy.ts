import { assert, Equals, isTruthy, Truthy } from 'common';

describe(`Truthy and isTruthy`, () => {
  it(`works`, () => {
    assert<
      Equals<
        Truthy<boolean | undefined | null | 1 | 0 | -1 | 'a' | ''>,
        true | 1 | -1 | 'a'
      >
    >();

    const list = [true, false, undefined, null, 1, 0, -1, 'a', ''] as const;
    const result = list.filter(isTruthy);
    assert<Equals<typeof result, (true | 1 | -1 | 'a')[]>>();
    expect(result).toEqual([true, 1, -1, 'a']);
  });
});
