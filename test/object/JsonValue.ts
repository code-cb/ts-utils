import * as O from 'object';

describe(`O.JsonValue`, () => {
  it(`works`, () => {
    const f = (_v: O.JsonValue) => {};
    f({ a: 1, b: '2', c: true });
    // @ts-expect-error
    f({ a: () => {} });
  });
});
