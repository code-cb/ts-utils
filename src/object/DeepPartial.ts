/**
 * References:
 * - https://github.com/ts-essentials/ts-essentials/blob/c63e30e6112ed93df0bcf05028cfe1d67617f93d/lib/types.ts#L35
 * - https://github.com/sindresorhus/type-fest/blob/92843597f4c4296b76cd26f10d3e7cfb666d5cca/source/partial-deep.d.ts#L62
 * - https://github.com/millsp/ts-toolbelt/blob/319e55123b9571d49f34eca3e5926e41ca73e0f3/sources/Object/Optional.ts#L17
 */

import { Builtin, IsUnknown } from '../common';

export type DeepPartial<T> = T extends Builtin
  ? T
  : IsUnknown<T> extends true
  ? T
  : T extends Map<infer K, infer V>
  ? Map<DeepPartial<K>, DeepPartial<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepPartial<K>, DeepPartial<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepPartial<K>, DeepPartial<V>>
  : T extends Set<infer V>
  ? Set<DeepPartial<V>>
  : T extends ReadonlySet<infer V>
  ? ReadonlySet<DeepPartial<V>>
  : T extends WeakSet<infer V>
  ? WeakSet<DeepPartial<V>>
  : T extends Promise<infer V>
  ? Promise<DeepPartial<V>>
  : {
      [K in keyof T]?: DeepPartial<T[K]>;
    };
