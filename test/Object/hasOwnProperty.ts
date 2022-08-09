import { assert, Equals, O } from '../../src/index.js';

interface SuccessResult<Value = unknown> {
  value: Value;
  statusCode: number;
}

interface FailureResult<Error = unknown> {
  error: Error;
  statusCode: number;
}

export const f1 = (result: SuccessResult | FailureResult) => {
  if (O.hasOwnProperty(result, 'value'))
    assert<Equals<typeof result, SuccessResult>>();
  else assert<Equals<typeof result, FailureResult>>();
};
