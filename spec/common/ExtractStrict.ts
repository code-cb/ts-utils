import { assert, Equals, ExtractStrict } from '../../sources/common';

type Union = { type: string; value: 'a' } | { type: string; value: 'b' };

assert<Equals<Extract<Union, { value: 'a' }>, { type: string; value: 'a' }>>();
assert<
  // @ts-expect-error
  Equals<ExtractStrict<Union, { value: 'a' }>, { type: string; value: 'a' }>
>();

assert<Equals<Extract<Union, { type: any; value: 'e' }>, never>>();
// @ts-expect-error
assert<Equals<ExtractStrict<Union, { type: any; value: 'e' }>, never>>();

assert<
  Equals<
    ExtractStrict<Union, { type: any; value: 'b' }>,
    { type: string; value: 'b' }
  >
>();