/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Class/Parameters.ts
 */

import { Constructor } from './Constructor.js';

export type Parameters<Ctor extends Constructor<any[], object>> =
  Ctor extends Constructor<infer Params, any> ? Params : never;
