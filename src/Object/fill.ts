export type Fill<Obj extends object, Default extends Partial<Obj>> = Omit<
  Obj,
  keyof Default
> &
  Partial<Default>;

export const fill =
  <Obj extends object>() =>
  <Default extends Partial<Obj>>(defaultObj: Default) =>
  (fillObj: Fill<Obj, Default>) =>
    ({
      ...defaultObj,
      ...fillObj,
    } as unknown as Obj);
