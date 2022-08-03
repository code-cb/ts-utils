/**
 * References:
 * - https://github.com/garronej/tsafe/blob/debb125bef32a6312c0381969968c529dae25e17/src/objectFromEntries.ts
 */

import { Objectify } from './Objectify.js';

export type ObjectFromEntries<Entries extends readonly [PropertyKey, unknown]> =
  Objectify<0, 1, Entries>;

export const objectFromEntries = <
  Entries extends readonly [PropertyKey, unknown],
>(
  entries: ReadonlyArray<Entries>,
) => Object.fromEntries(entries) as ObjectFromEntries<Entries>;
