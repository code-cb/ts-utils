import { assert, Compute, IsEqual } from 'common';

describe(`Compute`, () => {
  it(`works`, () => {
    assert<IsEqual<Compute<{ a: 1; b: 2 }>, { a: 1; b: 2 }>>();
    assert<IsEqual<Compute<{ a: 1 } & { b: 2 }>, { a: 1; b: 2 }>>();
    (a: keyof URL) => console.log(a);
    (a: Compute<keyof URL>) => console.log(a);
    (a: Pick<URL, 'searchParams' | 'toJSON'>) => console.log(a);
    (a: Compute<Pick<URL, 'searchParams' | 'toJSON'>>) => console.log(a);
  });
});
