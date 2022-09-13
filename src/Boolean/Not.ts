/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Boolean/Not.ts
 * - https://github.com/garronej/tsafe/blob/f3ca4e40da4754bd3cae96403f5b4268468de004/src/Not.ts
 */

import { _Str } from './_Str';

type NotMap = {
  true: false;
  false: true;
};

export type Not<Value extends boolean> = NotMap[_Str<Value>];
