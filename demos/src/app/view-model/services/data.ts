import { Customer, EntityCache, LineItem, Order, Product } from '../model';

export const customers: Customer[] = [
  {
    id: 1,
    first: 'Derek',
    last: 'Zoolander',
    city: 'New York City',
    birthDate: new Date('1988-04-01'),
    photo: 'assets/zoolander.jpeg',
    pet: 'Spooky',
    secretSauce: 'Mayonnaise'
  },
  {
    id: 2,
    first: 'Fabio',
    last: 'Lanzoni',
    city: 'Milan',
    birthDate: new Date('1959-03-15'),
    photo: 'assets/fabio.jpg',
    pet: 'Felix',
    secretSauce: 'Catsup'
  },
  {
    id: 3,
    first: 'Lucy',
    last: 'Liu',
    city: 'Jackson Heights',
    birthDate: new Date('1968-12-02'),
    photo: 'assets/lucy-liu.png',
    pet: 'Vernon',
    secretSauce: 'Old Spice'
  },
  {
    id: 4,
    first: 'Tyson',
    last: 'Beckford',
    city: 'Rochester',
    birthDate: new Date('1970-12-19'),
    photo: 'assets/tyson-beckford.png',
    pet: 'Vernon',
    secretSauce: 'Old Spice'
  },
  {
    id: 5,
    first: 'Heidi',
    last: 'Klum',
    city: 'Bergisch Gladbach',
    birthDate: new Date('1973-06-01'),
    photo: 'assets/klum.jpg',
    pet: 'Tigger',
    secretSauce: "Pete's Kick Butt BBQ"
  }
];

export const orders: Order[] = [
  {
    id: 1,
    customerId: 1,
    orderDate: new Date('2020-03-10'),
    memo: 'Fun & Games'
  },
  {
    id: 2,
    customerId: 1,
    orderDate: new Date('2020-03-28'),
    memo: "Xbox for Sally's birthday"
  },
  {
    id: 3,
    customerId: 3,
    orderDate: new Date('2020-03-15'),
    memo: 'Electronics frenzy'
  },
  {
    id: 4,
    customerId: 4,
    orderDate: new Date('2020-02-15'),
    memo: 'Game Night!'
  }
];

export const lineItems: LineItem[] = [
  {
    id: 1,
    orderId: 1,
    productId: 1,
    quantity: 2
  },
  {
    id: 2,
    orderId: 1,
    productId: 11,
    quantity: 1
  },
  {
    id: 3,
    orderId: 1,
    productId: 4,
    quantity: 3
  },
  {
    id: 4,
    orderId: 1,
    productId: 5,
    quantity: 10
  },
  // ------
  {
    id: 5,
    orderId: 2,
    productId: 2,
    quantity: 1
  },
  // ------
  {
    id: 6,
    orderId: 3,
    productId: 3,
    quantity: 1
  },
  {
    id: 7,
    orderId: 3,
    productId: 8,
    quantity: 1,
    isDeleted: true
  },
  {
    id: 8,
    orderId: 3,
    productId: 6,
    quantity: 1
  },
  {
    id: 9,
    orderId: 3,
    productId: 7,
    quantity: 1,
    isDeleted: true
  },
  {
    id: 10,
    orderId: 3,
    productId: 9,
    quantity: 1
  },
  // ------
  {
    id: 11,
    orderId: 4,
    productId: 2,
    quantity: 1
  },
  {
    id: 12,
    orderId: 4,
    productId: 3,
    quantity: 1
  }
];

export const products: Product[] = [
  {
    id: 1,
    productName: 'Basketball',
    price: 29.99
  },
  {
    id: 2,
    productName: 'XBox',
    price: 299.99
  },
  {
    id: 3,
    productName: 'Nintendo Switch',
    price: 249.99
  },
  {
    id: 4,
    productName: 'Bat',
    price: 29.99
  },
  {
    id: 5,
    productName: 'Glove',
    price: 29.99
  },
  {
    id: 6,
    productName: 'Cell Phone',
    price: 799.99
  },
  {
    id: 7,
    productName: 'Cell Phone Service',
    price: 49.99
  },
  {
    id: 8,
    productName: 'Laptop',
    price: 999.99
  },
  {
    id: 9,
    productName: 'Bluetooth Speaker',
    price: 69.99
  },
  {
    id: 10,
    productName: 'TV',
    price: 1599.99
  },
  {
    id: 11,
    productName: 'Bag of Baseballs',
    price: 20.0
  }
];

export type EntityType = Customer | LineItem | Order | Product;

/** Return entity cache with clones of the source raw data */
export function getNewCache(): EntityCache {
  const cloneCollection = <T extends { id: number }>(collection: T[]) =>
    collection.map(item => {
      return { ...item };
    });

  return {
    customers: cloneCollection(customers),
    lineItems: cloneCollection(lineItems),
    orders: cloneCollection(orders),
    products: cloneCollection(products)
  };
}
