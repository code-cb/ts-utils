/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/6c8081978326eacbc4798b9b7838a3d718fa3dda/sources/Union/IntersectOf.ts
 * - https://github.com/sindresorhus/type-fest/blob/e3234d74aa12d12f209d942a43d30b3f88301916/source/union-to-intersection.d.ts
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L415
 */

export type MonoFn<Union> = Union extends any ? (arg: Union) => any : never;

export type ToIntersection<Union> =
  MonoFn<Union> extends (arg: infer Intersection) => void
    ? Intersection
    : never;
