/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/6c8081978326eacbc4798b9b7838a3d718fa3dda/sources/Union/IntersectOf.ts
 * - https://github.com/sindresorhus/type-fest/blob/e3234d74aa12d12f209d942a43d30b3f88301916/source/union-to-intersection.d.ts
 */

export type ToIntersection<Union> = (
  Union extends unknown ? (union: Union) => void : never
) extends (intersection: infer Intersection) => void
  ? Intersection
  : never;
