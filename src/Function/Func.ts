/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Function/Function.ts
 */

export type Func<Args extends unknown[] = [], Return = void> = (
  ...args: Args
) => Return;

export type AnyFunc = Func<any[], any>;

export type VoidFunc = Func<[], void>;