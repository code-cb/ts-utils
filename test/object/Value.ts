import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.Value`, () => {
  it(`works`, () => {
    interface Obj {
      a: number;
      b: string;
      c?: boolean;
    }

    assert<Equals<O.Value<Obj>, number | string | boolean | undefined>>();
    assert<Equals<O.Value<Obj, 'a' | 'c'>, number | boolean | undefined>>();
  });
});
