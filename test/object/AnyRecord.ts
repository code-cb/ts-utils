import { assert, Assignable } from 'common';
import * as O from 'object';

describe(`O.AnyRecord`, () => {
  it(`works`, () => {
    assert<Assignable<Record<string, unknown>, O.AnyRecord>>();
    assert<Assignable<Record<number, unknown>, O.AnyRecord>>();
    assert<Assignable<Record<symbol, unknown>, O.AnyRecord>>();
  });
});

describe(`O.AnyReadonlyRecord`, () => {
  it(`works`, () => {
    assert<
      Assignable<Readonly<Record<string, unknown>>, O.AnyReadonlyRecord>
    >();
    assert<
      Assignable<Readonly<Record<number, unknown>>, O.AnyReadonlyRecord>
    >();
    assert<
      Assignable<Readonly<Record<symbol, unknown>>, O.AnyReadonlyRecord>
    >();
  });
});
