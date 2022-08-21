import * as L from '../../src/list/index.js';
import { assert, Equals } from '../../src/common/index.js';

type Item = 'a' | 'b' | 'c';
declare const v: Item;
if (L.inSubset<Item>()(['a', 'b'])(v)) {
  assert<Equals<typeof v, 'a' | 'b'>>();
}
