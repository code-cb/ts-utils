import * as F from '../../src/function';

export namespace Main {
  type NoInfer<Value> = F.NoInfer<Value>;

  declare const f1: <T>(a: T, b: NoInfer<T>) => T;
  f1('a', 'a');
  f1(undefined, undefined);
  // @ts-expect-error
  f1('a', 'b');

  declare const f2: <T>(a: NoInfer<T>, b: T) => T;
  f2('b', 'b');
  f2(undefined, undefined);
  // @ts-expect-error
  f2('a', 'b');

  declare const f3: <T = never>(a: NoInfer<T>, b: NoInfer<T>) => T;
  // @ts-expect-error
  f3(undefined, undefined);
  f3<string>('a', 'b');
  // @ts-expect-error
  f3('a', 'b');
}

/**
 * Alternative implementations of `NoInfer`
 */
export namespace A1 {
  type NoInfer<Value> = Value & { [K in keyof Value]: Value[K] };

  declare const f1: <T>(a: T, b: NoInfer<T>) => T;
  f1('a', 'a');
  f1(undefined, undefined);
  // @ts-expect-error
  f1('a', 'b');

  declare const f2: <T>(a: NoInfer<T>, b: T) => T;
  f2('b', 'b');
  f2(undefined, undefined);
  // @ts-expect-error
  f2('a', 'b');

  declare const f3: <T = never>(a: NoInfer<T>, b: NoInfer<T>) => T;
  f3(undefined, undefined); // Oops, T is inferred as undefined
  f3<string>('a', 'b');
  f3('a', 'b'); // Oops, T is inferred as 'a' | 'b'
}
