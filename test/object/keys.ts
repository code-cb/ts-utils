import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.Key and O.keys`, () => {
  it(`works`, () => {
    const sa = Symbol('a');
    const sb = Symbol('b');
    const o = {
      a: 1,
      b: 2,
      1: '1',
      2: '2',
      [sa]: 'sa',
      [sb]: 'sb',
    };

    assert<Equals<O.Key<typeof o>, 'a' | 'b' | '1' | '2'>>();
    const k1 = O.keys(o);
    assert<Equals<typeof k1, ('a' | 'b' | '1' | '2')[]>>();
    expect(k1.length).toBe(4);
    expect(k1).toEqual(expect.arrayContaining(['a', 'b', '1', '2']));
    expect(k1).not.toContain(sa);
    expect(k1).not.toContain(sb);
  });
});
