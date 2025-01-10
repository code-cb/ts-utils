export type ExcludeSuper<T, U> = T extends T
  ? U extends T
    ? never
    : T
  : never;
