import { assert, Equals, id } from '../../src/common';
import * as O from '../../src/object';

type Entries = ['a', number] | ['b', () => Promise<number>] | ['c', string];
assert<
  Equals<
    O.FromEntries<Entries>,
    { a: number; b: () => Promise<number>; c: string }
  >
>();

enum Mode {
  Dark,
  Light,
}
type NodeType = 'text' | 'comment';
const entries = [
  ['mode', id<Mode>(Mode.Dark)] as const,
  [1, () => Promise.resolve(2)] as const,
  ['type', id<NodeType>('text')] as const,
  [Symbol.iterator, () => ({})] as const,
];
const obj = O.fromEntries(entries);

assert<
  Equals<
    typeof obj,
    {
      mode: Mode;
      1: () => Promise<number>;
      type: NodeType;
      [Symbol.iterator]: () => {};
    }
  >
>();
