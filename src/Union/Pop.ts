/**
 * References:
 * - https://github.com/millsp/ts-toolbelt/blob/7d6c44df57c5024d565041e33894660d868a2d86/sources/Union/Pop.ts
 */

import { Last } from './Last.js';

export type Pop<Union> = Exclude<Union, Last<Union>>;
