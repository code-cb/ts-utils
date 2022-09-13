import { id } from '../common/id';
import { Dict } from './Dict';

export const dictOf = <Value, Key extends PropertyKey = string>() =>
  id<Dict<Value, Key>>();
