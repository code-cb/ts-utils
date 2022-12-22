import { assert, Equals } from 'common';
import * as O from 'object';

describe(`O.KeyByValue, O.OmitByValue and O.PickByValue`, () => {
  it(`works`, () => {
    interface I1 {
      readonly a: number;
      b?: boolean;
      c: number;
      readonly d: string;
      e: any;
      f: unknown;
      g: number | string;
    }

    assert<Equals<O.KeyByValue<I1, number>, 'a' | 'c'>>();
    assert<
      Equals<
        O.OmitByValue<I1, number>,
        {
          b?: boolean;
          readonly d: string;
          e: any;
          f: unknown;
          g: number | string;
        }
      >
    >();
    assert<
      Equals<O.PickByValue<I1, number>, { readonly a: number; c: number }>
    >();

    assert<Equals<O.KeyByValue<I1, number, true>, 'a' | 'c' | 'e'>>();
    assert<
      Equals<
        O.OmitByValue<I1, number, true>,
        { b?: boolean; readonly d: string; f: unknown; g: number | string }
      >
    >();
    assert<
      Equals<
        O.PickByValue<I1, number, true>,
        { readonly a: number; c: number; e: any }
      >
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
        {
          readonly a: number;
          c: number;
          readonly d: string;
          g: number | string;
        }
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
        {
          readonly a: number;
          c: number;
          readonly d: string;
          e: any;
          g: number | string;
        }
      >
    >();

    assert<Equals<O.KeyByValue<I1, boolean>, never>>();
    assert<
      Equals<
        O.OmitByValue<I1, boolean>,
        {
          readonly a: number;
          b?: boolean;
          c: number;
          readonly d: string;
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
          readonly a: number;
          b?: boolean;
          c: number;
          readonly d: string;
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
          readonly a: number;
          c: number;
          readonly d: string;
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
        {
          readonly a: number;
          c: number;
          readonly d: string;
          f: unknown;
          g: number | string;
        }
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
          readonly a: number;
          b?: boolean;
          c: number;
          readonly d: string;
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
          readonly a: number;
          b?: boolean;
          c: number;
          readonly d: string;
          f: unknown;
          g: number | string;
        }
      >
    >();
    assert<Equals<O.PickByValue<I1, Function, true>, { e: any }>>();
  });
});
