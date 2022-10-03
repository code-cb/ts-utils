import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.Last and S.last`, () => {
  it(`works`, () => {
    assert<Equals<S.Last<''>, undefined>>();
    const l1 = S.last('');
    assert<Equals<typeof l1, undefined>>();
    expect(l1).toBe(undefined);

    assert<Equals<S.Last<'efg'>, 'g'>>();
    const l2 = S.last('efg');
    assert<Equals<typeof l2, 'g'>>();
    expect(l2).toBe('g');

    assert<Equals<S.Last<string>, string | undefined>>();
    const l3 = S.last(String('abc'));
    assert<Equals<typeof l3, string | undefined>>();
    expect(l3).toBe('c');
  });
});
