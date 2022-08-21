import { id } from '../common/id.js';
import { Dict } from './Dict.js';

export const dictOf = <Value>() => id<Dict<Value>>();
