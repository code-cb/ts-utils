import { Value } from './Value.js';
import { MarkRequiredKeyAsNever } from './OptionalKey.js';

export type RequiredKey<Obj extends object> = Exclude<
  keyof Obj,
  Value<MarkRequiredKeyAsNever<Obj>>
>;
