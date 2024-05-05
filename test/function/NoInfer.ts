import { assert, Equals } from 'common';
import * as F from 'function';

describe(`F.NoInfer`, () => {
  it(`works`, () => {
    const f0 = <T>(a: T, b: T): T => (F.noop(b), a);
    f0(2, 3);
    f0('a', 'a');
    f0(undefined, undefined);
    const v0 = f0('a', 'b');
    assert<Equals<typeof v0, 'a' | 'b'>>();

    const f1 = <T>(a: T, b: F.NoInfer<T>): T => (F.noop(b), a);
    f1(2, 2);
    f1('a', 'a');
    f1(undefined, undefined);
    // @ts-expect-error
    const v1 = f1('a', 'b');
    assert<Equals<typeof v1, 'a'>>();

    const g1 = <T>(a: T, b: NoInfer<T>): T => (F.noop(b), a);
    g1(2, 2);
    g1('a', 'a');
    g1(undefined, undefined);
    //@ts-expect-error
    const w1 = g1('a', 'b');
    assert<Equals<typeof w1, 'a'>>();

    const f2 = <T>(a: F.NoInfer<T>, b: T): T => (F.noop(b), a);
    f2(3, 3);
    f2('b', 'b');
    f2(undefined, undefined);
    // @ts-expect-error
    const v2 = f2('a', 'b');
    assert<Equals<typeof v2, 'b'>>();

    const g2 = <T>(a: NoInfer<T>, b: T): T => (F.noop(b), a);
    g2(3, 3);
    g2('b', 'b');
    g2(undefined, undefined);
    // @ts-expect-error
    const w2 = g2('a', 'b');
    assert<Equals<typeof w2, 'b'>>();

    // When returned type is not declared the type is less narrowed
    const f3 = <T>(a: F.NoInfer<T>, b: T) => (F.noop(b), a);
    const v3 = f3('b', 'b');
    assert<Equals<typeof v3, string>>();

    // When returned type is not declared the type is less narrowed
    const g3 = <T>(a: NoInfer<T>, b: T) => (F.noop(b), a);
    const w3 = g3('b', 'b');
    assert<Equals<typeof w3, string>>();

    const f4 = <T = never>(a: F.NoInfer<T>, b: F.NoInfer<T>): T => (
      F.noop(b), a
    );
    // @ts-expect-error
    f4(undefined, undefined);
    f4<string>('a', 'b');
    // @ts-expect-error
    const v4 = f4('a', 'b');
    assert<Equals<typeof v4, never>>();

    const g4 = <T = never>(a: NoInfer<T>, b: NoInfer<T>): T => (F.noop(b), a);
    // @ts-expect-error
    g4(undefined, undefined);
    g4<string>('a', 'b');
    // @ts-expect-error
    const w4 = g4('a', 'b');
    assert<Equals<typeof w4, never>>();
  });
});
