import { id } from '../common/id';

export const arrayOf = <Value>() => id<ReadonlyArray<Value>>();
