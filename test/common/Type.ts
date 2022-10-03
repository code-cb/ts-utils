import * as B from 'boolean';
import { assert, Assignable, Equals, ofType, Type, UnwrapType } from 'common';

type Email = Type<string, 'Email'>;

describe(`Type`, () => {
  it(`works`, () => {
    assert<Equals<Email, Type<string, 'Email'>>>(); // Hmm, it's still somewhat structural
    assert<B.Not<Equals<Email, string>>>();
    assert<Assignable<Email, string>>();
    assert<B.Not<Assignable<string, Email>>>();
    assert<Equals<UnwrapType<Email>, string>>();
  });
});

describe(`ofType`, () => {
  it(`works`, () => {
    const e1 = ofType<Email>('abc@def.ghi');
    assert<Equals<typeof e1, Email>>();
  });
});
