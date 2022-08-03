import {
  assert,
  Equals,
  id,
  objectFromEntries,
  ObjectFromEntries,
} from '../index.js';

type Entries = ['a', number] | ['b', () => Promise<number>] | ['c', string];
assert<
  Equals<
    ObjectFromEntries<Entries>,
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
const obj = objectFromEntries(entries);

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
