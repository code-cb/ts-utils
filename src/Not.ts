/**
 * References:
 * - https://github.com/garronej/tsafe/blob/f3ca4e40da4754bd3cae96403f5b4268468de004/src/Not.ts
 */
export type Not<T extends boolean> = T extends true ? false : true;

// import { Equals } from './Equals.js';

// export type Not<T extends boolean> = Equals<T, true> extends true
//   ? false
//   : Equals<T, false> extends true
//   ? true
//   : never;
