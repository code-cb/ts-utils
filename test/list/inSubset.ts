import { assert, Equals } from 'common';
import * as L from 'list';

type Item = 'a' | 'b' | 'c';
declare const v: Item;
if (L.inSubset<Item>()(['a', 'b'])(v)) {
  assert<Equals<typeof v, 'a' | 'b'>>();
}
