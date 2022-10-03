import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.Append`, () => {
  it(`works`, () => {
    assert<Equals<L.Append<[1, 2, 3], 4>, [1, 2, 3, 4]>>();
  });
});

describe(`L.append`, () => {
  it(`works`, () => {
    const l1 = L.append([1, 2, 3] as const, 'a' as const);
    assert<Equals<typeof l1, [1, 2, 3, 'a']>>();
    expect(l1).toEqual([1, 2, 3, 'a']);

    const l2 = L.append([1, 2, 3], 'a');
    assert<Equals<typeof l2, [...number[], string]>>();
    expect(l2).toEqual([1, 2, 3, 'a']);
  });
});
