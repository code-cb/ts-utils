/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Class/Instance.ts
 * - builtin `InstanceType` type
 */

import { AbstractConstructor } from './Constructor';

/**
 * @deprecated Use the builtin `InstanceType` instead.
 */
export type Instance<Ctor extends AbstractConstructor<any[], any>> =
  Ctor extends AbstractConstructor<any[], infer Instance> ? Instance : never;
