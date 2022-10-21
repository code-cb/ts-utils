import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.Unionize, O.Entries and O.entries`, () => {
  it(`works`, () => {
    assert<Equals<O.Unionize<{}>, never>>();

    assert<Equals<O.Entries<Record<string, Date>>, [string, Date][]>>();

    assert<Equals<O.Entries<{}>, []>>();
    const e1 = O.entries({});
    assert<Equals<typeof e1, []>>();
    expect(e1).toEqual([]);

    interface O1 {
      a: number;
      b?: () => Promise<number>;
    }
    assert<
      Equals<
        O.Unionize<O1>,
        ['a', number] | ['b', (() => Promise<number>) | undefined]
      >
    >();
    type E = O.Entries<O1>;
    assert<
      Equals<E, (['a', number] | ['b', (() => Promise<number>) | undefined])[]>
    >();
    const e2 = O.entries({
      a: 1,
      b: () => Promise.resolve(2),
    });
    assert<
      Equals<typeof e2, (['a', number] | ['b', () => Promise<number>])[]>
    >();
    expect(e2.length).toBe(2);
    expect(e2).toContainEqual(['a', 1]);
    expect(e2).toContainEqual(['b', expect.any(Function)]);
  });
});
