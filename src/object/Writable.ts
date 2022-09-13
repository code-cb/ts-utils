/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L183
 */

export type Writable<Obj extends object> = {
  -readonly [K in keyof Obj]: Obj[K];
};
