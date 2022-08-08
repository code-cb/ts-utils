import { assert, Equals, ExcludeStrict } from '../../src/index.js';

type Union = { type: string; value: 'a' } | { type: string; value: 'b' };

assert<Equals<Exclude<Union, { value: 'a' }>, { type: string; value: 'b' }>>();
assert<
  // @ts-expect-error: Property 'type' is missing in type '{ value: "a"; }' but required in type '{ type: string; value: "a"; }'
  Equals<ExcludeStrict<Union, { value: 'a' }>, { type: string; value: 'b' }>
>();

assert<Equals<Exclude<Union, { type: any; value: 'e' }>, Union>>();
// @ts-expect-error: Types of property 'value' are incompatible
assert<Equals<ExcludeStrict<Union, { type: any; value: 'e' }>, Union>>();

assert<
  Equals<
    ExcludeStrict<Union, { type: any; value: 'b' }>,
    { type: string; value: 'a' }
  >
>();
