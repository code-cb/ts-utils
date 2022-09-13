/**
 * References:
 * - https://github.com/garronej/tsafe/blob/e1b1b781bb927e21d338f69ff518110ecf4bc93f/src/MethodNames.ts
 */

import { AnyFunc } from '../function/Func';

export type MethodNames<Obj extends object> = {
  [K in keyof Obj]-?: Obj[K] extends AnyFunc ? K : never;
}[keyof Obj];
