/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Any/Cast.ts
 */

export type Cast<A, B> = A extends B ? A : B;
