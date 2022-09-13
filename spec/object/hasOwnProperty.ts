import { assert, Equals } from '../../sources/common';
import * as O from '../../sources/object';

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

assert<Equals<O.ObjectWithProperty<Result, 'value'>, SuccessState<string>>>();
assert<Equals<O.ObjectWithProperty<Result, 'error'>, FailureState<Error>>>();
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

export const f1 = (result: Result) => {
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
