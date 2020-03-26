/**
 * 
 * "Reducers" for entity operations like add and update.
 * Dragons!  No need to enter.
 * 
 */
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { CacheStore, cacheSnapShot, collectionSnapshot, EntityCache, EntityType } from './entity-cache';
import { modelGuards } from './model-guards';

/**
 * Add a new entity to a cached collection.
 * Maintains immutability by cloning both the entity and the collection.
 * @param entity The entity to add. Must have its unique id.
 * @returns The added entity, potentially enriched by the addEntityGuard. 
 */
export function addEntity<T extends EntityType>(entity: T, collectionName: keyof EntityCache, cacheStore: CacheStore): T {
  const newEntity = addEntityGuard(entity, collectionName, cacheStore);
  cacheStore.pipe(first()).subscribe(cache => {
    const coll = cache[collectionName] as any as T[];

    // Add-one-to-cache reducer
    cache = {
      ...cache,
      [collectionName]: coll.concat(newEntity as T)
    };

    cacheStore.next(cache);
  });
  return entity;
}

/**
 * Update an entity in a cached collection by merging its properties with the cached entity. 
 * Maintains immutability by cloning both the entity and the collection.
 * @param entity The entity to update. Must have its unique id and already exist in the collection.
 * @returns The updated entity, after cleaning by the updateEntityGuard and merging with existing entity.
 */
export function updateEntity<T extends EntityType>(entity: T, collectionName: keyof EntityCache, cacheStore: CacheStore): T {
  const id = entity.id;
  const update = updateEntityGuard(entity, collectionName, cacheStore);
  cacheStore.pipe(first()).subscribe(cache => {
    const coll = cache[collectionName] as any as T[];

    // Update-one-in-cache reducer
    cache = {
      ...cache,
      [collectionName]: coll.map(e => e.id === id ? entity = { ...e, ...update } : e)
    };

    cacheStore.next(cache);
  });
  return entity;
}

/**
 * Ensure the entity you're about to add has an id, is not already in the collection,
 * has all and only the properties required, and its FKs (if any) are valid.
 */
 function addEntityGuard<T extends { id: number }>(entity: T, collectionName: keyof EntityCache, cache$: Observable<EntityCache>): T {
  const id = entity.id;
  if (id == null) {
    throw new Error(`Cannot add a new entity to ${collectionName} without an id.`);
  }

  const bad = null != collectionSnapshot(collectionName, cache$).find((e: {id: number}) => e.id === id);
  if (bad) {
    throw new Error(`Cannot add entity with id:${id} because it is already in the ${collectionName} collection.`);
  }
  const cache = cacheSnapShot(cache$);
  return modelGuards[collectionName](entity, true, cache) as T;
}

/** 
 * Ensure the entity you're about to update has an id, is already in the collection,
 * has all and only the properties required, and its FKs (if any) are valid.
 */
 function updateEntityGuard<T extends { id: number }>(
  entity: T, collectionName: keyof EntityCache, cache$: Observable<EntityCache>): T {
  const id = entity.id;
  if (id == null) {
    throw new Error(`Cannot update an new entity to ${collectionName} without an id.`);
  }
  const bad = null == collectionSnapshot(collectionName, cache$).find((e: {id: number}) => e.id === id);
  if (bad) {
    throw new Error(`Cannot update and entity with id:${id} because it cannot be found in the ${collectionName} collection.`);
  }
  const cache = cacheSnapShot(cache$);
  return modelGuards[collectionName](entity, false, cache) as T;
}