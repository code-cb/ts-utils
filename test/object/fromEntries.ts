import { assert, Equals, id } from 'common';
import * as O from 'object';
import { UnionizeDeep } from 'object/fromEntries';

describe(`UnionizeDeep`, () => {
  assert<
    Equals<
      UnionizeDeep<['a' | 'b' | 'c', Date]>,
      ['a', Date] | ['b', Date] | ['c', Date]
    >
  >();

  assert<
    Equals<
      UnionizeDeep<['a', Date] | ['b', RegExp] | ['c', Function | undefined]>,
      ['a', Date] | ['b', RegExp] | ['c', Function | undefined]
    >
  >();

  assert<
    Equals<
      UnionizeDeep<
        ['a' | 'b', Date] | ['b' | 'c', RegExp] | ['c', Function | undefined]
      >,
      | ['a', Date]
      | ['b', Date]
      | ['b', RegExp]
      | ['c', RegExp]
      | ['c', Function | undefined]
    >
  >();
});

describe(`O.Objectify and O.fromEntries`, () => {
  it(`works`, () => {
    assert<Equals<O.Objectify<never>, {}>>();
    const f1 = O.fromEntries([]);
    assert<Equals<typeof f1, {}>>();
    expect(f1).toEqual({});

    assert<
      Equals<
        O.Objectify<['a' | 'b' | 'c', Date]>,
        { a: Date; b: Date; c: Date }
      >
    >();
    const f2 = O.fromEntries(
      (['a', 'b', 'c'] as const).map(k => [k, new Date()]),
    );
    assert<Equals<typeof f2, { a: Date; b: Date; c: Date }>>();
    expect(f2).toEqual({
      a: expect.any(Date),
      b: expect.any(Date),
      c: expect.any(Date),
    });

    assert<
      Equals<
        O.Objectify<['a', number] | ['b', () => Promise<number>]>,
        { a: number; b: () => Promise<number> }
      >
    >();
    const f3 = O.fromEntries([
      ['a' as const, 1],
      ['b' as const, () => Promise.resolve(2)],
    ]);
    assert<Equals<typeof f3, { a: number; b: () => Promise<number> }>>();
    expect(f3).toEqual({ a: 1, b: expect.any(Function) });

    assert<
      Equals<
        O.Objectify<
          ['a' | 'b', Date] | ['b' | 'c', RegExp] | ['c', Function | undefined]
        >,
        { a: Date; b: Date | RegExp; c: RegExp | Function | undefined }
      >
    >();

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
    const f4 = O.fromEntries(entries);
    assert<
      Equals<
        typeof f4,
        {
          mode: Mode;
          1: () => Promise<number>;
          type: NodeType;
          [Symbol.iterator]: () => {};
        }
      >
    >();
    expect(f4).toMatchObject({
      mode: Mode.Dark,
      1: expect.any(Function),
      type: 'text',
    });
    expect(f4[Symbol.iterator]).toEqual(expect.any(Function));
  });
});
