/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/80df163e0031aa0c08cf1c0dc6a3fecca17552da/sources/Union/Last.ts
 */

import { ToIntersection } from './ToIntersection.js';

export type Last<Union> = ToIntersection<
  Union extends unknown ? (union: Union) => void : never
> extends (last: infer Last) => void
  ? Last
  : never;
