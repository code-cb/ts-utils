import { assert, Equals } from 'common';
import * as F from 'function';

describe(`F.NoInfer`, () => {
  it(`works`, () => {
    type NoInfer<Value> = F.NoInfer<Value>;

    const f0 = <T>(a: T, b: T): T => (F.noop(b), a);
    const v0 = f0('a', 'b');
    assert<Equals<typeof v0, 'a' | 'b'>>();

    const f1 = <T>(a: T, b: NoInfer<T>): T => (F.noop(b), a);
    f1('a', 'a');
    f1(undefined, undefined);
    // @ts-expect-error
    const v1 = f1('a', 'b');
    assert<Equals<typeof v1, 'a'>>();

    const f2 = <T>(a: NoInfer<T>, b: T): T => (F.noop(b), a);
    f2('b', 'b');
    f2(undefined, undefined);
    // @ts-expect-error
    const v2 = f2('a', 'b');
    assert<Equals<typeof v2, 'b'>>();

    const f3 = <T = never>(a: NoInfer<T>, b: NoInfer<T>): T => (F.noop(b), a);
    // @ts-expect-error
    f3(undefined, undefined);
    f3<string>('a', 'b');
    // @ts-expect-error
    const v3 = f3('a', 'b');
    assert<Equals<typeof v3, never>>();
  });
});
