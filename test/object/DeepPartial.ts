import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.DeepPartial`, () => {
  it(`works`, () => {
    interface ExtendedFunction extends Function {
      calls: unknown[][];
    }
    interface ExtendedDate extends Date {
      today(): number;
    }
    interface ExtendedError extends Error {
      code: string;
    }
    interface ExtendedRegExp extends RegExp {
      caseSensitive: true;
    }

    assert<Equals<O.DeepPartial<bigint>, bigint>>;
    assert<Equals<O.DeepPartial<boolean>, boolean>>;
    assert<Equals<O.DeepPartial<Date>, Date>>;
    assert<Equals<O.DeepPartial<ExtendedDate>, ExtendedDate>>;
    assert<Equals<O.DeepPartial<Error>, Error>>;
    assert<Equals<O.DeepPartial<ExtendedError>, ExtendedError>>;
    assert<Equals<O.DeepPartial<Function>, Function>>;
    assert<Equals<O.DeepPartial<ExtendedFunction>, ExtendedFunction>>;
    assert<Equals<O.DeepPartial<null>, null>>;
    assert<Equals<O.DeepPartial<number>, number>>;
    assert<Equals<O.DeepPartial<RegExp>, RegExp>>;
    assert<Equals<O.DeepPartial<ExtendedRegExp>, ExtendedRegExp>>;
    assert<Equals<O.DeepPartial<string>, string>>;
    assert<Equals<O.DeepPartial<symbol>, symbol>>;
    assert<Equals<O.DeepPartial<undefined>, undefined>>;

    assert<Equals<O.DeepPartial<unknown>, unknown>>;

    assert<Equals<O.DeepPartial<Map<string, boolean>>, Map<string, boolean>>>;
    assert<
      Equals<
        O.DeepPartial<ReadonlyMap<string, { checked: boolean }>>,
        ReadonlyMap<string, { checked?: boolean }>
      >
    >;
    assert<
      Equals<
        O.DeepPartial<WeakMap<{ key: string }, { value: boolean }>>,
        WeakMap<{ key?: string }, { value?: boolean }>
      >
    >;

    assert<Equals<O.DeepPartial<Set<string>>, Set<string>>>;
    assert<
      Equals<
        O.DeepPartial<ReadonlySet<number[]>>,
        ReadonlySet<(number | undefined)[]>
      >
    >;
    assert<
      Equals<O.DeepPartial<WeakSet<{ key: string }>>, WeakSet<{ key?: string }>>
    >;

    assert<Equals<O.DeepPartial<Promise<number>>, Promise<number>>>;

    assert<Equals<O.DeepPartial<[]>, []>>;
    assert<Equals<O.DeepPartial<never[]>, undefined[]>>;
    assert<
      Equals<
        O.DeepPartial<[1, 2, 3]>,
        [(1 | undefined)?, (2 | undefined)?, (3 | undefined)?]
      >
    >;
    assert<
      Equals<O.DeepPartial<readonly number[]>, readonly (number | undefined)[]>
    >;
    assert<Equals<O.DeepPartial<number[]>, (number | undefined)[]>>;
    assert<Equals<O.DeepPartial<Array<number>>, Array<number | undefined>>>;

    assert<
      Equals<
        O.DeepPartial<
          Promise<{ api: () => { play: () => void; pause: () => void } }>
        >,
        Promise<{ api?: () => { play: () => void; pause: () => void } }>
      >
    >;
    assert<
      Equals<
        O.DeepPartial<{
          readonly obj: unknown;
          readonly arr: readonly unknown[];
        }>,
        {
          readonly obj?: unknown | undefined;
          readonly arr?: readonly unknown[] | undefined;
        }
      >
    >;
    assert<
      Equals<O.DeepPartial<{ a: 1; b: 2; c: 3 }>, { a?: 1; b?: 2; c?: 3 }>
    >;
    assert<Equals<O.DeepPartial<{ foo: () => void }>, { foo?: () => void }>>;

    assert<
      Equals<
        O.DeepPartial<{
          simple: number;
          nested: {
            date: Date;
            func: () => string;
            array: { bar: number }[];
            tuple: [a: string, b: number, c: { good: boolean }];
            set: Set<{ name: string }>;
            map: Map<
              string,
              {
                name: string;
              }
            >;
            promise: Promise<{ foo: string; bar: number }>;
          };
        }>,
        {
          simple?: number;
          nested?: {
            date?: Date;
            func?: () => string;
            array?: ({ bar?: number } | undefined)[];
            tuple?: [a?: string, b?: number, c?: { good?: boolean }];
            set?: Set<{ name?: string }>;
            map?: Map<string, { name?: string }>;
            promise?: Promise<{ foo?: string; bar?: number }>;
          };
        }
      >
    >;
  });
});
