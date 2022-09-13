/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Any/Try.ts
 */

export type TryCast<A, B, Fallback = never> = A extends B ? A : Fallback;
