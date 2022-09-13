/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Boolean/And.ts
 */

import { _Str } from './_Str';

type AndMap = {
  true: {
    true: true;
    false: false;
  };
  false: {
    true: false;
    false: false;
  };
};

export type And<
  A extends boolean,
  B extends boolean,
> = AndMap[_Str<A>][_Str<B>];
