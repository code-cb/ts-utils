import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.ToTuple and S.toTuple`, () => {
  it(`works`, () => {
    assert<Equals<S.ToTuple<''>, []>>();
    const t1 = S.toTuple('');
    assert<Equals<typeof t1, []>>();
    expect(t1).toEqual([]);

    assert<Equals<S.ToTuple<'a'>, ['a']>>();
    const t2 = S.toTuple('a');
    assert<Equals<typeof t2, ['a']>>();
    expect(t2).toEqual(['a']);

    assert<Equals<S.ToTuple<'abbccc'>, ['a', 'b', 'b', 'c', 'c', 'c']>>();
    const t3 = S.toTuple('abbccc');
    assert<Equals<typeof t3, ['a', 'b', 'b', 'c', 'c', 'c']>>();
    expect(t3).toEqual(['a', 'b', 'b', 'c', 'c', 'c']);

    assert<Equals<S.ToTuple<string>, string[]>>();
    const t4 = S.toTuple(String('abc'));
    assert<Equals<typeof t4, string[]>>();
    expect(t4).toEqual(['a', 'b', 'c']);
  });
});
