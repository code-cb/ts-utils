import { F } from '../../src/index.js';

export namespace Main {
  type NoInfer<T> = F.NoInfer<T>;

  declare const f1: <T>(a: T, b: NoInfer<T>) => T;
  f1('a', 'a');
  f1(undefined, undefined);
  // @ts-expect-error: Argument of type '"b"' is not assignable to parameter of type '"a"'
  f1('a', 'b');

  declare const f2: <T>(a: NoInfer<T>, b: T) => T;
  f2('b', 'b');
  f2(undefined, undefined);
  // @ts-expect-error: Argument of type '"a"' is not assignable to parameter of type '"b"'
  f2('a', 'b');

  declare const f3: <T = never>(a: NoInfer<T>, b: NoInfer<T>) => T;
  // @ts-expect-error: Argument of type 'undefined' is not assignable to parameter of type 'never'
  f3(undefined, undefined);
  f3<string>('a', 'b');
  // @ts-expect-error: Argument of type 'string' is not assignable to parameter of type 'never'
  f3('a', 'b');
}

/**
 * Alternative implementations of `NoInfer`
 */
export namespace A1 {
  type NoInfer<T> = T & { [K in keyof T]: T[K] };

  declare const f1: <T>(a: T, b: NoInfer<T>) => T;
  f1('a', 'a');
  f1(undefined, undefined);
  // @ts-expect-error: Argument of type '"b"' is not assignable to parameter of type '"a"'
  f1('a', 'b');

  declare const f2: <T>(a: NoInfer<T>, b: T) => T;
  f2('b', 'b');
  f2(undefined, undefined);
  // @ts-expect-error: Argument of type '"a"' is not assignable to parameter of type '"b"'
  f2('a', 'b');

  declare const f3: <T = never>(a: NoInfer<T>, b: NoInfer<T>) => T;
  f3(undefined, undefined); // Oops, T is inferred as undefined
  f3<string>('a', 'b');
  f3('a', 'b'); // Oops, T is inferred as 'a' | 'b'
}
