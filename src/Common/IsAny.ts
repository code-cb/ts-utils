/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L9
 * - https://stackoverflow.com/a/49928360/18801777
 */

export type IsAny<Value> = 0 extends 1 & Value ? true : false;
