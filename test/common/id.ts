import { assert, Assignable, Equals, id, Id } from 'common';

describe(`Id`, () => {
  it(`works`, () => {
    type E = 'a' | 'b' | 'c';

    type S1 = Id<E, 'a' | 'b'>;
    assert<Equals<S1, 'a' | 'b'>>();

    // @ts-expect-error
    type S2 = Id<E, 'a' | 'b' | 'd'>;

    type S3 = Id<number, 2 | 3>;
    assert<Equals<S3, 2 | 3>>();

    // @ts-expect-error
    type T1 = Id<number, 'a' | 'b'>;
  });
});

describe(`id`, () => {
  it(`works`, () => {
    const u1 = {
      name: 'Mary',
      gender: 'female',
    };
    assert<Equals<typeof u1, { name: string; gender: string }>>();

    const u2 = {
      name: 'John',
      gender: id<'male' | 'female'>('male'),
    };
    assert<Equals<typeof u2, { name: string; gender: 'male' | 'female' }>>();

    interface Circle {
      kind: 'circle';
      radius: number;
    }

    interface Rectangle {
      kind: 'rectangle';
      width: number;
      height: number;
    }

    type Shape = Circle | Rectangle;

    const getArea = (_shape: Shape) => Math.random();

    getArea({ kind: 'circle', radius: 5 });
    getArea({ kind: 'rectangle', width: 10, height: 20 });
    getArea(id<Circle>({ kind: 'circle', radius: 5 }));

    interface Options {
      a: number;
      b?: string;
      c: boolean;
    }

    const o1 = id<Partial<Options>>()({});
    assert<Assignable<typeof o1, Partial<Options>>>();
    assert<Equals<typeof o1, {}>>();

    const o2 = id<Partial<Options>>()({ a: 1 });
    assert<Assignable<typeof o2, Partial<Options>>>();
    assert<Equals<typeof o2, { a: number }>>();

    const o3 = id<Partial<Options>>()({ a: 1, b: 'foo' });
    assert<Assignable<typeof o3, Partial<Options>>>();
    assert<Equals<typeof o3, { a: number; b: string }>>();

    const o4 = id<Partial<Options>>()({ a: 1, b: 'foo', c: true });
    assert<Assignable<typeof o4, Partial<Options>>>();
    assert<Equals<typeof o4, { a: number; b: string; c: true }>>();

    const r1 = id<Record<string, Function>>()({ a: () => {} });
    assert<Equals<typeof r1, { a: () => void }>>();
  });
});
