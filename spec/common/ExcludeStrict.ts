import { assert, Equals, ExcludeStrict } from '../../sources/common';

type Union = { type: string; value: 'a' } | { type: string; value: 'b' };

assert<Equals<Exclude<Union, { value: 'a' }>, { type: string; value: 'b' }>>();
assert<
  // @ts-expect-error
  Equals<ExcludeStrict<Union, { value: 'a' }>, { type: string; value: 'b' }>
>();

assert<Equals<Exclude<Union, { type: any; value: 'e' }>, Union>>();
// @ts-expect-error
assert<Equals<ExcludeStrict<Union, { type: any; value: 'e' }>, Union>>();

assert<
  Equals<
    ExcludeStrict<Union, { type: any; value: 'b' }>,
    { type: string; value: 'a' }
  >
>();
