import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.arrayOf`, () => {
  it(`works`, () => {
    type E = 'a' | 'b' | 'c';

    const a1 = L.arrayOf<E>()([]);
    assert<Equals<typeof a1, never[]>>();
    expect(a1).toEqual([]);

    const a2 = L.arrayOf<E>()(['a', 'b']);
    assert<Equals<typeof a2, ('a' | 'b')[]>>();
    expect(a2).toEqual(['a', 'b']);

    // @ts-expect-error
    const a3 = L.arrayOf<E>()(['a', 'd']);
  });
});
