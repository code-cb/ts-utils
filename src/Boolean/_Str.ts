export type _Str<B extends boolean> = B extends true
  ? 'true'
  : B extends false
  ? 'false'
  : never;
