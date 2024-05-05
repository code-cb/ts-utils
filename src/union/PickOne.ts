/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/80df163e0031aa0c08cf1c0dc6a3fecca17552da/sources/Union/Last.ts
 */

import { MonoFn, ToIntersection } from './ToIntersection';

export type PickOne<Union> =
  ToIntersection<MonoFn<Union>> extends (v: infer Value) => any ? Value : never;
