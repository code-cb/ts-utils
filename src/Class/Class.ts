/**
 * References:
 * - https://github.com/sindresorhus/type-fest/blob/043b732bf02c2b700245aa6501116a6646d50732/source/basic.d.ts#L6
 */

import { AbstractConstructor, Constructor } from './Constructor.js';

export interface Class<Args extends unknown[], Instance extends object>
  extends Constructor<Args, Instance> {
  prototype: Instance;
}

export type AbstractClass<
  Args extends unknown[],
  Instance extends object,
> = AbstractConstructor<Args, Instance> & {
  prototype: Instance;
};
