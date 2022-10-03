import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.Prepend and L.prepend`, () => {
  it(`works`, () => {
    assert<Equals<L.Prepend<[2, 3, 4], 1>, [1, 2, 3, 4]>>();

    const l1 = L.prepend([1, 2, 3] as const, 'a' as const);
    assert<Equals<typeof l1, ['a', 1, 2, 3]>>();
    expect(l1).toEqual(['a', 1, 2, 3]);

    const l2 = L.prepend([1, 2, 3], 'a');
    assert<Equals<typeof l2, [string, ...number[]]>>();
    expect(l2).toEqual(['a', 1, 2, 3]);
  });
});
