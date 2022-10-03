import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.dictOf`, () => {
  it(`works`, () => {
    type E = 'a' | 'b' | 'c';

    const d1 = O.dictOf<E>()({});
    assert<Equals<typeof d1, {}>>();
    expect(d1).toEqual({});

    const d2 = O.dictOf<E>()({ a: 'a', b: 'b' });
    assert<Equals<typeof d2, { a: 'a'; b: 'b' }>>();
    expect(d2).toEqual({ a: 'a', b: 'b' });

    const d3 = O.dictOf<E, number>()({ 1: 'a', 2: 'b' });
    assert<Equals<typeof d3, { 1: 'a'; 2: 'b' }>>();
    expect(d3).toEqual({ 1: 'a', 2: 'b' });

    O.dictOf<E>()({
      a: 'a',
      // @ts-expect-error
      d: 'd',
    });
  });
});
