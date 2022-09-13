/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Class/Parameters.ts
 * - builtin `ConstructorParameters` type
 */

import { AbstractConstructor } from './Constructor';

/**
 * @deprecated Use the builtin `ConstructorParameters` instead.
 */
export type Parameters<Ctor extends AbstractConstructor<any[], any>> =
  Ctor extends AbstractConstructor<infer Params, any> ? Params : never;
