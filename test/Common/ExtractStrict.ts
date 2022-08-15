import { assert, Equals, ExtractStrict } from '../../src/common/index.js';

type Union = { type: string; value: 'a' } | { type: string; value: 'b' };

assert<Equals<Extract<Union, { value: 'a' }>, { type: string; value: 'a' }>>();
assert<
  // @ts-expect-error: Property 'type' is missing in type '{ value: "a"; }' but required in type '{ type: string; value: "a"; }'
  Equals<ExtractStrict<Union, { value: 'a' }>, { type: string; value: 'a' }>
>();

assert<Equals<Extract<Union, { type: any; value: 'e' }>, never>>();
// @ts-expect-error: Types of property 'value' are incompatible
assert<Equals<ExtractStrict<Union, { type: any; value: 'e' }>, never>>();

assert<
  Equals<
    ExtractStrict<Union, { type: any; value: 'b' }>,
    { type: string; value: 'b' }
  >
>();
