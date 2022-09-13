export function assertNever(value: never, message?: string): never;
export function assertNever(value: never, doNotThrow?: boolean): never;
export function assertNever(value: never, arg?: string | boolean): never {
  const willThrow = typeof arg === 'boolean' ? !arg : true;
  const message = typeof arg === 'string' ? arg : `Unexpected value ${value}`;
  if (willThrow) throw new Error(message);
  return undefined as never;
}
