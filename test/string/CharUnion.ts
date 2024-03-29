import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.CharUnion`, () => {
  it(`works`, () => {
    assert<Equals<S.CharUnion<''>, never>>;
    assert<Equals<S.CharUnion<'a'>, 'a'>>;
    assert<Equals<S.CharUnion<'abbccc'>, 'a' | 'b' | 'c'>>;
    assert<Equals<S.CharUnion<string>, string>>;
  });
});
