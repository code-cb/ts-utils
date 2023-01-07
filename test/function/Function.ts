import { assert, Equals } from 'common';
import * as F from 'function';

describe(`F.UnknownArgs`, () => {
  it(`works`, () => {
    assert<Equals<F.UnknownArgs, readonly unknown[]>>();
  });
});

describe(`F.Function`, () => {
  it(`works`, () => {
    assert<Equals<F.Function, () => void>>();
    assert<
      Equals<F.Function<[string, boolean?]>, (a: string, b?: boolean) => void>
    >();
    assert<
      Equals<F.Function<unknown[], number>, (...args: unknown[]) => number>
    >();
  });
});

describe(`F.AnyArgs`, () => {
  it(`works`, () => {
    assert<Equals<F.AnyArgs, readonly any[]>>();
  });
});

describe(`F.AnyFunction`, () => {
  it(`works`, () => {
    assert<Equals<F.AnyFunction, (...args: any[]) => any>>();
  });
});

describe(`F.VoidFunction`, () => {
  it(`works`, () => {
    assert<Equals<F.VoidFunction, () => void>>();
  });
});
