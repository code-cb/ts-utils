/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Class/Class.ts
 * - https://github.com/sindresorhus/type-fest/blob/043b732bf02c2b700245aa6501116a6646d50732/source/basic.d.ts#L13
 */

export interface Constructor<Args extends unknown[], Instance extends object> {
  new (...args: Args): Instance;
}

export type AnyConstructor = Constructor<any[], any>;

export type AbstractConstructor<
  Args extends unknown[],
  Instance extends object,
> = abstract new (...args: Args) => Instance;

export type AnyAbstractConstructor = AbstractConstructor<any[], any>;
