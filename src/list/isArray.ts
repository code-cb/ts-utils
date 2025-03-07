export const isArray = (o: unknown): o is any[] | readonly any[] =>
  Array.isArray(o);
