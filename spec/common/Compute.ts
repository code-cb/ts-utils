import { assert, Compute, IsEqual } from '../../sources/common';

assert<IsEqual<Compute<{ a: 1; b: 2 }>, { a: 1; b: 2 }>>();
assert<IsEqual<Compute<{ a: 1 } & { b: 2 }>, { a: 1; b: 2 }>>();

export declare const f1: (a: keyof URL) => void;
export declare const f2: (a: Compute<keyof URL>) => void;
export declare const f3: (a: Pick<URL, 'searchParams' | 'toJSON'>) => void;
export declare const f4: (
  a: Compute<Pick<URL, 'searchParams' | 'toJSON'>>,
) => void;
