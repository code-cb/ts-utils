import { assert, Equals } from '../../src/common';
import * as L from '../../src/list';

type Item = 'a' | 'b' | 'c';
declare const v: Item;
if (L.inSubset<Item>()(['a', 'b'])(v)) {
  assert<Equals<typeof v, 'a' | 'b'>>();
}
