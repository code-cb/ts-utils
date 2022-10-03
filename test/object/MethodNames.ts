import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.MethodNames`, () => {
  it(`works`, () => {
    interface Obj {
      a: number;
      b: string;
      c(): void;
      d?: () => Promise<any>;
    }

    assert<Equals<O.MethodNames<Obj>, 'c'>>();
    assert<Equals<O.MethodNames<Required<Obj>>, 'c' | 'd'>>();
  });
});
