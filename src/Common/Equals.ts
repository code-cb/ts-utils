/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Any/Equals.ts
 * - https://github.com/garronej/tsafe/blob/9fd80c7b449d4402d7b4e1e8cfcd9601f8c0992b/src/tools/StrictEquals.ts
 * - https://github.com/sindresorhus/type-fest/blob/edfba7ae22643586b76c2f1a8828947a67a13e4f/source/internal.d.ts#L9
 * - https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript/52473108#52473108
 * - https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
 * - https://github.com/aleclarson/spec.ts/blob/a5f7926fa532fd6b742bccdb0d1c8025fbc1a20b/index.d.ts#L9
 */

import { Compute } from './Compute';

type StrictEquals<A, B> = (<T>(a: T) => T extends A ? true : false) extends <T>(
  b: T,
) => T extends B ? true : false
  ? true
  : false;

export type Equals<A, B> = StrictEquals<Compute<A>, Compute<B>>;

export type IsEqual<A, B extends A = A> = StrictEquals<Compute<A>, Compute<B>>;
