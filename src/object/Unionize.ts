import { Compute } from '../common';
import { Value } from './Value';

export type Unionize<
  Obj extends object,
  KeyName extends PropertyKey = 'key',
  ValueName extends PropertyKey = 'value',
> = Value<{
  [K in keyof Obj]-?: Compute<Record<KeyName, K> & Record<ValueName, Obj[K]>>;
}>;
