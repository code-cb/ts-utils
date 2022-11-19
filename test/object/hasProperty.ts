import { assert, Equals } from 'common';
import * as O from 'object';

interface SuccessState<Value> {
  value: Value;
  statusCode: number;
}

interface FailureState<Error> {
  error: Error;
  statusCode: number;
}

interface PendingState {
  key?: string | undefined;
  startTime: number;
  timeout?: number;
}

type Result = SuccessState<string> | FailureState<Error> | PendingState;

describe(`O.ObjectWithProperty`, () => {
  it(`works`, () => {
    assert<
      Equals<O.ObjectWithProperty<Result, 'value'>, SuccessState<string>>
    >();
    assert<
      Equals<O.ObjectWithProperty<Result, 'error'>, FailureState<Error>>
    >();
    assert<
      Equals<
        O.ObjectWithProperty<Result, 'timeout'>,
        { key?: string | undefined; startTime: number; timeout: number }
      >
    >(),
      assert<
        Equals<
          O.ObjectWithProperty<{ a: 1 }, 'value'>,
          { a: 1 } & { value: unknown }
        >
      >();
  });
});

describe(`O.hasOwnProperty and O.hasProperty`, () => {
  it(`works`, () => {
    (result: Result) => {
      if (O.hasOwnProperty(result, 'value'))
        assert<Equals<typeof result.value, string>>();
      if (O.hasOwnProperty(result, 'error'))
        assert<Equals<typeof result.error, Error>>();
      if (O.hasOwnProperty(result, 'timeout')) {
        assert<Equals<typeof result.startTime, number>>();
        assert<Equals<typeof result.timeout, number>>();
      }
      if (O.hasOwnProperty(result, 'key')) {
        assert<Equals<typeof result.key, string | undefined>>();
        assert<Equals<typeof result.timeout, number | undefined>>();
      }
    };

    (result: Result) => {
      if (O.hasProperty(result, 'value'))
        assert<Equals<typeof result.value, string>>();
      if (O.hasProperty(result, 'error'))
        assert<Equals<typeof result.error, Error>>();
      if (O.hasProperty(result, 'timeout')) {
        assert<Equals<typeof result.startTime, number>>();
        assert<Equals<typeof result.timeout, number>>();
      }
      if (O.hasProperty(result, 'key')) {
        assert<Equals<typeof result.key, string | undefined>>();
        assert<Equals<typeof result.timeout, number | undefined>>();
      }
    };

    (result: Result) => {
      if ('value' in result) assert<Equals<typeof result.value, string>>();
      if ('error' in result) assert<Equals<typeof result.error, Error>>();
      if ('timeout' in result) {
        assert<Equals<typeof result.startTime, number>>();
        assert<Equals<typeof result.timeout, number | undefined>>();
      }
      if ('key' in result) {
        assert<Equals<typeof result.key, string | undefined>>();
        assert<Equals<typeof result.timeout, number | undefined>>();
      }
    };

    const r1: Result = { statusCode: 1, value: '' };
    expect(O.hasOwnProperty(r1, 'value')).toBe(true);
    expect(O.hasOwnProperty(r1, 'statusCode')).toBe(true);
    expect(O.hasOwnProperty(r1, 'error')).toBe(false);

    const r2: Result = { error: new Error(), statusCode: 2 };
    expect(O.hasOwnProperty(r2, 'error')).toBe(true);
    expect(O.hasOwnProperty(r2, 'statusCode')).toBe(true);
    expect(O.hasOwnProperty(r2, 'value')).toBe(false);

    type List<T> = Array<T> | Map<T, any> | Set<T>;

    const l1: List<number> = new Map([
      [1, '1'],
      [2, '2'],
    ]);
    expect(O.hasProperty(l1, 'has')).toBe(true);
    expect(O.hasOwnProperty(l1, 'has')).toBe(false);

    const l2: List<number> = new Set([1, 2, 3]);
    expect(O.hasProperty(l2, 'has')).toBe(true);
    expect(O.hasOwnProperty(l2, 'has')).toBe(false);

    const l3: List<number> = [1, 2, 3];
    expect(O.hasProperty(l3, 'has')).toBe(false);
    expect(O.hasOwnProperty(l3, 'has')).toBe(false);
  });
});
