/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Function/Function.ts
 */

export type UnknownArgs = readonly unknown[];

export type Function<Args extends UnknownArgs = [], Return = void> = (
  ...args: Args
) => Return;

export type AnyArgs = readonly any[];

export type AnyFunction = Function<AnyArgs, any>;

export type VoidFunction = Function<[], void>;
