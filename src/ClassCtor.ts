export interface ClassCtor<Args extends unknown[], Instance> {
  new (...args: Args): Instance;
}
