export type Assignable<A, B> = (() => A) extends () => B ? true : false;

// export type Assignable<A, B> = [A] extends [B] ? true : false;
