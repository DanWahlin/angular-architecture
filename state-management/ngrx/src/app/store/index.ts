export * from './actions';
export * from './effects';
export * from './reducers';
export * from './services';

import { CustomerDataService, CustomerSelectors, OrderDataService, OrderSelectors } from './services';

export const services = [
  CustomerDataService,
  CustomerSelectors,
  OrderDataService,
  OrderSelectors
];
