/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L6
 * - https://effectivetypescript.com/2020/06/16/typed-identity-functions/
 */

export const tuple = <Args extends any[]>(...args: Args) => args;
