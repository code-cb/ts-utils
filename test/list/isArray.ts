import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.isArray`, () => {
  it(`works`, () => {
    (
      arr:
        | readonly number[]
        | string[]
        | [true, false]
        | readonly ['a', 'b', 'c']
        | Record<string, unknown>,
    ) => {
      if (Array.isArray(arr)) {
        assert<Equals<typeof arr, string[] | [true, false]>>();
      }
      if (L.isArray(arr)) {
        assert<
          Equals<
            typeof arr,
            | readonly number[]
            | string[]
            | [true, false]
            | readonly ['a', 'b', 'c']
          >
        >();
      }
    };

    (arr: number | string | boolean | Record<string, unknown>) => {
      if (Array.isArray(arr)) {
        assert<
          Equals<
            typeof arr,
            (string | number | boolean | Record<string, unknown>) & any[]
          >
        >();
      }
      if (L.isArray(arr)) {
        assert<
          Equals<
            typeof arr,
            (string | number | boolean | Record<string, unknown>) &
              (any[] | readonly any[])
          >
        >();
      }
    };
  });
});
