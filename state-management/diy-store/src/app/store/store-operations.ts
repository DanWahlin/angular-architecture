/*
 * Core operations for any type of collection in the store's cache.
 */

import { BehaviorSubject, first } from 'rxjs';

import { CollectionType, StoreCache } from './store-metadata';
import { storeGuards } from './store-guards';

/** BehaviorSubject that holds the cache.
 * FOR INTERNAL USE.
 * Outsiders can access only via the public API's in this file. */
const cacheStore = new BehaviorSubject<StoreCache>({} as StoreCache);

/** Observable of the store's cache. Cannot*/
export const cache$ = cacheStore.asObservable();

export function initializeCache(initialCacheState: StoreCache) {
  cacheStore.next(initialCacheState);
}

/** Get the current value (a "snapshot") of the store's entire cache.
 * Simplifies by encapsulating the common RxJS cache access dance.
 * INTERNAL USE ONLY.
 */
function cacheSnapShot() {
  let cache: StoreCache | null = null;
  cache$.pipe(first()).subscribe((c) => (cache = c));
  return cache!;
}

/** Get the current value (a "snapshot") of a named collection in cache.
 *  Simplifies by encapsulating the common RxJS collection access dance.
 * INTERNAL USE ONLY.
 */
function collectionSnapshot<T extends CollectionType>(
  collectionName: keyof StoreCache
) {
  return (cacheSnapShot()[collectionName] as T[]) || [];
}

/** Load a cached collection with entities. Replaces the entire collection. */
export function loadCollection<T extends CollectionType>(
  collectionName: keyof StoreCache,
  collection: T[]
) {
  cacheStore.pipe(first()).subscribe((cache) => {
    cache = { ...cache, [collectionName]: collection };
    cacheStore.next(cache);
  });
}

/** Add a new "entity" to a cached collection.
 * Maintains immutability by cloning the collection.
 * @param entity The entity to add. Must have its unique id.
 * @returns The added entity, potentially enriched by the addEntityGuard.
 */
export function addEntity<T extends CollectionType>(
  collectionName: keyof StoreCache,
  entity: T
): T {
  const newEntity = addEntityGuard(collectionName, entity);
  const cache = cacheSnapShot();
  const coll = (cache[collectionName] as any as T[]) || [];

  const newCache = {
    ...cache,
    [collectionName]: coll.concat(newEntity as T),
  };

  cacheStore.next(newCache);
  return entity;
}

/** Update an "entity in a cached collection by merging its properties with the cached object.
 * Maintains immutability by cloning both the entity and the collection.
 * @param entity The entity to update. Must have its unique id and already exist in the collection.
 * @returns The updated entity, after cleaning by the updateEntityGuard and merging with existing entity.
 */
export function updateEntity<T extends CollectionType>(
  collectionName: keyof StoreCache,
  entity: T
): T {
  const id = entity.id;
  const update = updateEntityGuard(collectionName, entity);

  const cache = cacheSnapShot();
  const coll = (cache[collectionName] as any as T[]) || [];

  const newCache = {
    ...cache,
    [collectionName]: coll.map((e) =>
      e.id === id ? (entity = { ...e, ...update }) : e
    ),
  };

  cacheStore.next(newCache);
  return entity;
}

// #region store guards

/** Ensures that the entity you're about to add has an id, is not already in the collection,
 * has all and only the properties required, and its FKs (if any) are valid.
 */
function addEntityGuard<T extends { id: number }>(
  collectionName: keyof StoreCache,
  entity: T
): T {
  const id = entity.id;
  if (id == null) {
    throw new Error(
      `Cannot add a new object to ${collectionName} without an id.`
    );
  }

  const bad =
    null !=
    collectionSnapshot(collectionName).find((e: { id: number }) => e.id === id);
  if (bad) {
    throw new Error(
      `Cannot add entity with id:${id} because it is already in the ${collectionName} collection.`
    );
  }
  return storeGuards[collectionName](entity, 'add', cacheSnapShot()) as T;
}

/** Ensures that the entity you're about to update has an id, already in the collection,
 * has all and only the properties required, and its FKs (if any) are valid.
 */
function updateEntityGuard<T extends { id: number }>(
  collectionName: keyof StoreCache,
  entity: T
): T {
  const id = entity.id;
  if (id == null) {
    throw new Error(
      `Cannot update an object in the ${collectionName} without an id.`
    );
  }
  const bad =
    null ==
    collectionSnapshot(collectionName).find((e: { id: number }) => e.id === id);
  if (bad) {
    throw new Error(
      `Cannot update object with id:${id} because it cannot be found in the ${collectionName} collection.`
    );
  }
  return storeGuards[collectionName](entity, 'update', cacheSnapShot()) as T;
}

// #endregion store guards
