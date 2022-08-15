import { Compute } from '../common/Compute.js';

export type WithPartial<
  Obj extends object,
  PartialObj extends Partial<Obj>,
> = Omit<Obj, keyof PartialObj> & Partial<PartialObj>;

export const withPartial =
  <Obj extends object>() =>
  <PartialObj extends Partial<Obj>>(partialObj: PartialObj) =>
  (o: Compute<WithPartial<Obj, PartialObj>>) =>
    ({
      ...partialObj,
      ...o,
    } as unknown as Obj);
