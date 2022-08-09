import { id } from '../Common/id.js';
import { Dict } from './Dict.js';

export const dictOf = <T>() => id<Dict<T>>();
