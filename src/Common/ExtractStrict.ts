/**
 * References:
 * - https://github.com/pelotom/type-zoo/blob/28951c520e6daf03e9ff61ddb0f3880eb6f0a501/types/index.d.ts#L10
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L213
 */

export type ExtractStrict<T, U extends T> = T extends U ? T : never;
