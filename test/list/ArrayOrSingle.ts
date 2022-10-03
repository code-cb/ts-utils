import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.ArrayOrSingle and L.ReadonlyArrayOrSingle`, () => {
  it(`works`, () => {
    assert<Equals<L.ArrayOrSingle<number>, number | number[]>>();
    assert<
      Equals<L.ReadonlyArrayOrSingle<number>, number | readonly number[]>
    >();
  });
});

describe(`L.ElementOrSingle`, () => {
  it(`works`, () => {
    assert<Equals<L.ElementOrSingle<L.ArrayOrSingle<Date>>, Date>>();
    assert<
      Equals<L.ElementOrSingle<L.ReadonlyArrayOrSingle<symbol>>, symbol>
    >();
  });
});
