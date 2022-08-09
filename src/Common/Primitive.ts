/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Misc/Primitive.ts
 * - https://github.com/sindresorhus/type-fest/blob/043b732bf02c2b700245aa6501116a6646d50732/source/primitive.d.ts
 */

export type Primitive =
  | boolean
  | string
  | number
  | bigint
  | symbol
  | undefined
  | null;
