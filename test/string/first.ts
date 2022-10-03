import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.First and S.first`, () => {
  it(`works`, () => {
    assert<Equals<S.First<''>, undefined>>();
    const f1 = S.first('');
    assert<Equals<typeof f1, undefined>>();
    expect(f1).toBe(undefined);

    assert<Equals<S.First<'efg'>, 'e'>>();
    const f2 = S.first('efg');
    assert<Equals<typeof f2, 'e'>>();
    expect(f2).toBe('e');

    assert<Equals<S.First<string>, string | undefined>>();
    const f3 = S.first(String('abc'));
    assert<Equals<typeof f3, string | undefined>>();
    expect(f3).toBe('a');
  });
});
