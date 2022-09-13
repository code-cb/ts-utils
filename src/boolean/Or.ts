/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Boolean/Or.ts
 */

import { _Str } from './_Str';

type OrMap = {
  true: {
    true: true;
    false: true;
  };
  false: {
    true: true;
    false: false;
  };
};

export type Or<A extends boolean, B extends boolean> = OrMap[_Str<A>][_Str<B>];
