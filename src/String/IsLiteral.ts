/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Community/IsLiteral.ts
 */

export type IsLiteral<T> = T extends string
  ? string extends T
    ? false
    : true
  : false;