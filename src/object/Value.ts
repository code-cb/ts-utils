/**
 * References:
 * - https://github.com/sindresorhus/type-fest/blob/e3234d74aa12d12f209d942a43d30b3f88301916/source/value-of.d.ts
 */

export type Value<
  Obj extends object,
  Key extends keyof Obj = keyof Obj,
> = Obj[Key];
