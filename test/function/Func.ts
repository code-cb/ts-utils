import { assert, Equals } from 'common';
import * as F from 'function';

describe(`F.Func`, () => {
  it(`works`, () => {
    assert<Equals<F.Func, () => void>>();
    assert<
      Equals<F.Func<[string, boolean?]>, (a: string, b?: boolean) => void>
    >();
    assert<Equals<F.Func<unknown[], number>, (...args: unknown[]) => number>>();
  });
});

describe(`F.AnyFunc`, () => {
  it(`works`, () => {
    assert<Equals<F.AnyFunc, (...args: any[]) => any>>();
  });
});

describe(`F.VoidFunc`, () => {
  it(`works`, () => {
    assert<Equals<F.VoidFunc, () => void>>();
  });
});
