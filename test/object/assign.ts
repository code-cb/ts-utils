import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.Assign and O.assign`, () => {
  it(`works`, () => {
    assert<Equals<O.Assign<{}, []>, {}>>();
    const a1 = O.assign({});
    assert<Equals<typeof a1, {}>>();
    expect(a1).toEqual({});

    assert<Equals<O.Assign<{ a: 'a' }, [{ b: 'b' }]>, { a: 'a'; b: 'b' }>>();
    const a2 = O.assign({ a: 'a' } as const, { b: 'b' } as const);
    assert<Equals<typeof a2, { a: 'a'; b: 'b' }>>();
    expect(a2).toEqual({ a: 'a', b: 'b' });

    assert<
      Equals<
        O.Assign<
          { a: 'a'; d: 'd' },
          [{ a: 'a1'; b: 'b' }, { b: 'b2'; c: 'c' }]
        >,
        { a: 'a1'; b: 'b2'; c: 'c'; d: 'd' }
      >
    >();
    const a3 = O.assign(
      { a: 'a', d: 'd' } as const,
      { a: 'a1', b: 'b' } as const,
      { b: 'b2', c: 'c' } as const,
    );
    assert<Equals<typeof a3, { a: 'a1'; b: 'b2'; c: 'c'; d: 'd' }>>();
    expect(a3).toEqual({ a: 'a1', b: 'b2', c: 'c', d: 'd' });
  });
});
