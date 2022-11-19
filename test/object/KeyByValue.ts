import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.KeyByValue, O.OmitByValue and O.PickByValue`, () => {
  it(`works`, () => {
    interface I1 {
      a: number;
      b?: boolean;
      c: number;
      d: string;
      e: any;
      f: unknown;
      g: number | string;
    }

    assert<Equals<O.KeyByValue<I1, number>, 'a' | 'c'>>();
    assert<
      Equals<
        O.OmitByValue<I1, number>,
        { b?: boolean; d: string; e: any; f: unknown; g: number | string }
      >
    >();
    assert<Equals<O.PickByValue<I1, number>, { a: number; c: number }>>();

    assert<Equals<O.KeyByValue<I1, number, true>, 'a' | 'c' | 'e'>>();
    assert<
      Equals<
        O.OmitByValue<I1, number, true>,
        { b?: boolean; d: string; f: unknown; g: number | string }
      >
    >();
    assert<
      Equals<O.PickByValue<I1, number, true>, { a: number; c: number; e: any }>
    >();

    assert<Equals<O.KeyByValue<I1, number | string>, 'a' | 'c' | 'd' | 'g'>>();
    assert<
      Equals<
        O.OmitByValue<I1, number | string>,
        { b?: boolean; e: any; f: unknown }
      >
    >();
    assert<
      Equals<
        O.PickByValue<I1, number | string>,
        { a: number; c: number; d: string; g: number | string }
      >
    >();

    assert<
      Equals<
        O.KeyByValue<I1, number | string, true>,
        'a' | 'c' | 'd' | 'e' | 'g'
      >
    >();
    assert<
      Equals<
        O.OmitByValue<I1, number | string, true>,
        { b?: boolean; f: unknown }
      >
    >();
    assert<
      Equals<
        O.PickByValue<I1, number | string, true>,
        { a: number; c: number; d: string; e: any; g: number | string }
      >
    >();

    assert<Equals<O.KeyByValue<I1, boolean>, never>>();
    assert<
      Equals<
        O.OmitByValue<I1, boolean>,
        {
          a: number;
          b?: boolean;
          c: number;
          d: string;
          e: any;
          f: unknown;
          g: number | string;
        }
      >
    >();
    assert<Equals<O.PickByValue<I1, boolean>, {}>>();

    assert<Equals<O.KeyByValue<I1, boolean, true>, 'e'>>();
    assert<
      Equals<
        O.OmitByValue<I1, boolean, true>,
        {
          a: number;
          b?: boolean;
          c: number;
          d: string;
          f: unknown;
          g: number | string;
        }
      >
    >();
    assert<Equals<O.PickByValue<I1, boolean, true>, { e: any }>>();

    assert<Equals<O.KeyByValue<I1, boolean | undefined>, 'b'>>();
    assert<
      Equals<
        O.OmitByValue<I1, boolean | undefined>,
        {
          a: number;
          c: number;
          d: string;
          e: any;
          f: unknown;
          g: number | string;
        }
      >
    >();
    assert<Equals<O.PickByValue<I1, boolean | undefined>, { b?: boolean }>>();

    assert<Equals<O.KeyByValue<I1, boolean | undefined, true>, 'b' | 'e'>>();
    assert<
      Equals<
        O.OmitByValue<I1, boolean | undefined, true>,
        { a: number; c: number; d: string; f: unknown; g: number | string }
      >
    >();
    assert<
      Equals<
        O.PickByValue<I1, boolean | undefined, true>,
        { b?: boolean; e: any }
      >
    >();

    assert<Equals<O.KeyByValue<I1, Function>, never>>();
    assert<
      Equals<
        O.OmitByValue<I1, Function>,
        {
          a: number;
          b?: boolean;
          c: number;
          d: string;
          e: any;
          f: unknown;
          g: number | string;
        }
      >
    >();
    assert<Equals<O.PickByValue<I1, Function>, {}>>();

    assert<Equals<O.KeyByValue<I1, Function, true>, 'e'>>();
    assert<
      Equals<
        O.OmitByValue<I1, Function, true>,
        {
          a: number;
          b?: boolean;
          c: number;
          d: string;
          f: unknown;
          g: number | string;
        }
      >
    >();
    assert<Equals<O.PickByValue<I1, Function, true>, { e: any }>>();
  });
});
