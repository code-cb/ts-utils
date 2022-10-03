import { assert, Equals } from 'common';
import * as L from 'list';

describe(`L.inSubset`, () => {
  it(`works`, () => {
    type Item = 'a' | 'b' | 'c';
    (v: Item) => {
      if (L.inSubset<Item>()(['a', 'b'])(v)) {
        assert<Equals<typeof v, 'a' | 'b'>>();
      }
    };
    expect(L.inSubset<Item>()(['a', 'b'])('a')).toBe(true);
    expect(L.inSubset<Item>()(['a', 'b'])('c')).toBe(false);
  });
});
