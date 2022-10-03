import * as F from 'function';

describe(`F.noop`, () => {
  it(`works`, () => {
    Promise.resolve(1).then(F.noop, F.noop);
    setTimeout(F.noop);
  });
});
