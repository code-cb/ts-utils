/**
 * References:
 * - https://github.com/pelotom/type-zoo/blob/28951c520e6daf03e9ff61ddb0f3880eb6f0a501/types/index.d.ts#L10
 */

export type ExtractStrict<T, U extends T> = T extends U ? T : never;
