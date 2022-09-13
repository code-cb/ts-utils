/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Community/IsLiteral.ts
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L417
 */

export type IsLiteral<Str extends string> = string extends Str ? false : true;

export type Literal<Str extends string> = string extends Str ? never : Str;
