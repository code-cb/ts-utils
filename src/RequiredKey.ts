import { ObjectValue } from './ObjectValue.js';
import { MarkRequiredKeyAsNever } from './OptionalKey.js';

export type RequiredKey<Obj extends object> = Exclude<
  keyof Obj,
  ObjectValue<MarkRequiredKeyAsNever<Obj>>
>;
