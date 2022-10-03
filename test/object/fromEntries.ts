import { assert, Equals, id } from 'common';
import * as O from 'object';

describe(`O.Objectify and O.fromEntries`, () => {
  it(`works`, () => {
    assert<Equals<O.Objectify<never>, {}>>();
    const f1 = O.fromEntries([]);
    assert<Equals<typeof f1, {}>>();
    expect(f1).toEqual({});

    assert<
      Equals<
        O.Objectify<['a', number] | ['b', () => Promise<number>]>,
        { a: number; b: () => Promise<number> }
      >
    >();
    const f2 = O.fromEntries([
      ['a' as const, 1],
      ['b' as const, () => Promise.resolve(2)],
    ]);
    assert<Equals<typeof f2, { a: number; b: () => Promise<number> }>>();
    expect(f2).toEqual({ a: 1, b: expect.any(Function) });

    enum Mode {
      Dark,
      Light,
    }
    type NodeType = 'text' | 'comment';
    const entries = [
      ['mode', id<Mode>(Mode.Dark)] as const,
      [1, () => Promise.resolve(2)] as const,
      ['type', id<NodeType>('text')] as const,
      [Symbol.iterator, () => ({})] as const,
    ];
    const f3 = O.fromEntries(entries);
    assert<
      Equals<
        typeof f3,
        {
          mode: Mode;
          1: () => Promise<number>;
          type: NodeType;
          [Symbol.iterator]: () => {};
        }
      >
    >();
    expect(f3).toMatchObject({
      mode: Mode.Dark,
      1: expect.any(Function),
      type: 'text',
    });
    expect(f3[Symbol.iterator]).toEqual(expect.any(Function));
  });
});
