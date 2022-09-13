import * as O from '../../src/object';

interface MyInterface {
  readonly a: string;
  readonly b?: number;
}

export const f1 = (v: MyInterface) => {
  // @ts-expect-error
  v.a = 'a';
  // @ts-expect-error
  v.b = 1;
};

export const f2 = (v: O.Writable<MyInterface>) => {
  v.a = 'a';
  v.b = 1;
};
