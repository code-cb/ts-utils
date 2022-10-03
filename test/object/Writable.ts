import * as O from 'object';

describe(`O.Writable`, () => {
  it(`works`, () => {
    interface MyInterface {
      readonly a: string;
      readonly b?: number;
    }

    (v: MyInterface) => {
      // @ts-expect-error
      v.a = 'a';
      // @ts-expect-error
      v.b = 1;
    };

    (v: O.Writable<MyInterface>) => {
      v.a = 'a';
      v.b = 1;
    };
  });
});
