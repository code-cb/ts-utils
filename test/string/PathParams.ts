import { assert, Equals } from 'common';
import * as S from 'string';

describe(`S.PathParams`, () => {
  it(`works`, () => {
    type Params1 = { siteId: string };
    assert<Equals<S.PathParams<':siteId'>, Params1>>();
    assert<Equals<S.PathParams<':siteId/'>, Params1>>();
    assert<Equals<S.PathParams<'/:siteId'>, Params1>>();
    assert<Equals<S.PathParams<'/:siteId/'>, Params1>>();

    type Params2 = { bookId: string; siteId: string };
    assert<Equals<S.PathParams<':siteId/books:abc/:bookId'>, Params2>>();
    assert<Equals<S.PathParams<':siteId/books:abc/:bookId/'>, Params2>>();
    assert<Equals<S.PathParams<'/:siteId/books:abc/:bookId'>, Params2>>();
    assert<Equals<S.PathParams<'/:siteId/books:abc/:bookId/'>, Params2>>();
  });
});
