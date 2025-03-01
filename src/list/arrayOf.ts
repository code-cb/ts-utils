import { id } from '../common/id';

export const arrayOf = <Value>() => id<readonly Value[]>();
