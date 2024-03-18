/*
 * Guard logic for each model type to ensure we add and update properly
 * Add a guard for each type (ex: Customer) in your model.
 */

import { Customer, Order } from '../model';
import { StoreCache } from './store-metadata';

export type OperationType = 'add' | 'update' | undefined;

/** A guard function that ensures the operation is valid for the given cached object.
 * Ensures that the object (typically an entity) that you're about to add or update
 * has all and only the properties required and that its FKs are valid.
 * May fill in or remove properties to protect the integrity of the collection.
 * Throws an error if the operation cannot be performed.
 * @param entity the data to add or update. Could be a partial version of the collection's type
 * @param [op] the operation type: 'add' or 'update'.
 * @param [cache] an instance of the store cache holding the latest state of all cached collections.
 * @returns The entity, possibly modified by the guard.
 */
export type StoreGuardFn = (
  entity: {},
  op?: OperationType,
  cache?: StoreCache
) => {};

/** An object with guard functions for each collection in the cache. */
export const storeGuards: { [key: string]: StoreGuardFn } = {
  customers: customerGuard,
  orders: orderGuard,
};

// #region private guard fns for each collection in the cache

/** Ensure customer has only the allowed properties. */
function customerGuard(customer: Partial<Customer>): Partial<Customer> {
  // Allow only the properties the client may save.
  // "Customer.secretSauce" cannot be changed!
  const { id, first, last, city, birthDate, photo, isDeleted, pet } = customer;
  return { id, first, last, city, birthDate, photo, isDeleted, pet };
}

/** Ensure Order has only allowed props and the customerId links to a Customer in cache. */
function orderGuard(
  order: Partial<Order>,
  op: OperationType,
  cache?: StoreCache
): Partial<Order> {
  // Allow only the properties the client may save
  const { id, customerId, orderItems } = order;
  if (op === 'add') {
    if (null == cache?.customers.find((c) => c.id === customerId)) {
      throw new Error(
        `Order.customerId (${customerId}) not found in cached customers`
      );
    }
    return { id, customerId, orderItems };
  } else if (op === 'update') {
    // orderItems is unusual in being an array rather than a simple value;
    // clone it for safety.
    const itemClones = structuredClone(orderItems);
    return { id, orderItems: itemClones }; // can't update the customerId
  } else {
    throw new Error(`Unknown operation type: ${op}`);
  }
}

// #endregion private guard fns for each collection in the cache
