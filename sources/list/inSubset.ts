import { includes } from './includes';

export const inSubset =
  <Item>() =>
  <Subset extends Item>(subsetList: Iterable<Subset>) =>
  (value: Item): value is Subset =>
    includes(subsetList, value, 0);
