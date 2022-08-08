/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Boolean/Xor.ts
 */

import { _Str } from './_Str.js';

type XorMap = {
  true: {
    true: false;
    false: true;
  };
  false: {
    true: true;
    false: false;
  };
};

export type Xor<
  A extends boolean,
  B extends boolean,
> = XorMap[_Str<A>][_Str<B>];
