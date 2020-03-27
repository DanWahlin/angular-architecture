/**
 * 
 * Guard logic for each model type to ensure we add and update properly
 * Add a guard for each type (ex: Customer) in your model.
 */

import { Customer } from './customer';
import { LineItem } from './line-item';
import { Order } from './order';
import { Product } from './product';
import { EntityCache } from './entity-cache';

/**
 * A guard function that ensures the operation is valid for the given entity.
 * Ensures that the change entity that your about to add or update 
 * has all and only the properties required and that its FKs are valid.
 * May fill in or remove properties to protect the integrity of the entity collection.
 * Throws an error if the operation cannot be performed on this entity.
 * @param entity the entity data to add or update. A partial version of a particular entity type
 * @param [isAdd] true if guarding an add operation; else false
 * @param [cache] an instance of the entity cache holding the latest state of all of the model collections.
 * @returns The adjusted change entity.
 */
type EntityGuardFn = (entity: {}, isAdd?: boolean, cache?: EntityCache) => {};

/** An object with guard functions for each entity collection in the model. */
export const modelGuards: { [key: string]: EntityGuardFn } = {
  customers:  customerGuard,
  lineItems:  lineItemGuard,
  orders:  orderGuard,
  products:  productGuard,
};

// #region private guard fns for each entity type in the model

/** Ensure customer has only the allowed properties. */
function customerGuard(customer: Partial<Customer>): Partial<Customer> {
  // Allow only the properties the client may save. 
  // "Customer.secretSauce" cannot be changed!
  // tslint:disable-next-line: no-shadowed-variable
  const { id, first, last, city, birthDate, photo, isDeleted, pet } = customer;
  return { id, first, last, city, birthDate, photo, isDeleted, pet };
}

/** Ensure LineItem has only allowed props and the orderId and productId link to an Order and Product in cache. */
function lineItemGuard(lineItem: Partial<LineItem>, isAdd: boolean, cache: EntityCache): Partial<LineItem> {
  // Allow only the properties the client may save
  const { id, orderId, productId, quantity, isDeleted: isRemoved } = lineItem;
  if (isAdd) {
    const bad = null == cache.orders.find(o => o.id === orderId) || null == cache.products.find(p => p.id === productId);
    if (bad) {
      throw new Error('LineItem foreign keys not found in cached orders or products');
    }
    return { id, orderId, productId, quantity, isDeleted: isRemoved };
  } else {
    return { id, quantity, isDeleted: isRemoved }; // can't change the orderId or productId
  }
}


/** Ensure Order has only allowed props and the customerId inks to a Customer in cache. */
function orderGuard(order: Partial<Order>, isAdd: boolean, cache: EntityCache): Partial<Order> {
  // Allow only the properties the client may save
  const {id, customerId, memo, orderDate } = order;
  if (isAdd) {
    const bad = isAdd && null == cache.customers.find(c => c.id === customerId);
    if (bad) {
      throw new Error(`Order.customerId (${customerId}) not found in cached customers`);
    }
    return {id, customerId, memo, orderDate } ;
  } else {
    return { id, memo, orderDate }; // can't change the customerId
  }
}

/** Ensure Product has only the allowed properties. */
function productGuard(product: Partial<Product>): Partial<Product> {
  // Allow only the properties the client may save
  // tslint:disable-next-line: no-shadowed-variable
  const { id, productName: name, price } = product;
  return { id, productName: name, price };
}

// #endregion private guard fns for each entity type in the model
