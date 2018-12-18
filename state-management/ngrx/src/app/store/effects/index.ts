import { CustomerEffects } from './customer.effects';
import { OrderEffects } from './order.effects';

export const effects: any[] = [CustomerEffects, OrderEffects];

export * from './customer.effects';
export * from './order.effects';
