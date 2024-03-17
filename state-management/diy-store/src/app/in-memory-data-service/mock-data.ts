
  import { Customer, Order } from '../model';

  export const customers: Customer[] = [
    {
      id: 1,
      first: 'Derek',
      last: 'Zoolander',
      city: 'New York City',
      birthDate: new Date('1988-04-01'),
      photo: 'assets/zoolander.jpeg',
      pet: 'Spooky',
      secretSauce: 'Mayonnaise',
    },
    {
      id: 2,
      first: 'Fabio',
      last: 'Lanzoni',
      city: 'Milan',
      birthDate: new Date('1959-03-15'),
      photo: 'assets/fabio.jpg',
      pet: 'Felix',
      secretSauce: 'Catsup',
    },
    {
      id: 3,
      first: 'Lucy',
      last: 'Liu',
      city: 'Jackson Heights',
      birthDate: new Date('1968-12-02'),
      photo: 'assets/lucy-liu.png',
      pet: 'Vernon',
      secretSauce: 'Old Spice',
    },
    {
      id: 4,
      first: 'Tyson',
      last: 'Beckford',
      city: 'Rochester',
      birthDate: new Date('1970-12-19'),
      photo: 'assets/tyson-beckford.png',
      pet: 'Vernon',
      secretSauce: 'Old Spice',
    },
    {
      id: 5,
      first: 'Heidi',
      last: 'Klum',
      city: 'Bergisch Gladbach',
      birthDate: new Date('1973-06-01'),
      photo: 'assets/klum.jpg',
      pet: 'Tigger',
      secretSauce: 'Pete\'s Kick Butt BBQ',
      isDeleted: true,
    },
  ];

  export const orders: Order[] = [
    {
      id: 1,
      customerId: 1,
      orderItems: [
        { id: 1, productName: 'Baseball', itemCost: 9.99 },
        { id: 2, productName: 'Bat', itemCost: 19.99 }
      ]
    },
    {
      id: 2,
      customerId: 2,
      orderItems: [
        { id: 3, productName: 'Basketball', itemCost: 7.99 },
        { id: 4, productName: 'Shoes', itemCost: 199.99 }
      ]
    },
    {
      id: 3,
      customerId: 3,
      orderItems: [
        { id: 5, productName: 'Frisbee', itemCost: 2.99 },
        { id: 6, productName: 'Hat', itemCost: 5.99 }
      ]
    },
    {
      id: 4,
      customerId: 4,
      orderItems: [
        { id: 7, productName: 'Boomerang', itemCost: 29.99 },
        { id: 8, productName: 'Helmet', itemCost: 19.99 },
        { id: 9, productName: 'Kangaroo Saddle', itemCost: 179.99 }
      ]
    },
    {
      id: 5,
      customerId: 5,
      orderItems: [
        { id: 10, productName: 'Budgie Smugglers', itemCost: 19.99 },
        { id: 11, productName: 'Swimming Cap', itemCost: 5.49 }
      ]
    },
    {
      id: 6,
      customerId: 6,
      orderItems: [
        { id: 12, productName: 'Bow', itemCost: 399.99 },
        { id: 13, productName: 'Arrows', itemCost: 69.99 }
      ]
    },
    {
      id: 7,
      customerId: 7,
      orderItems: [
        { id: 14, productName: 'Baseball', itemCost: 9.99 },
        { id: 15, productName: 'Bat', itemCost: 19.99 }
      ]
    },
    {
      id: 8,
      customerId: 8,
      orderItems: [
        { id: 16, productName: 'Surfboard', itemCost: 299.99 },
        { id: 17, productName: 'Wax', itemCost: 5.99 },
        { id: 18, productName: 'Shark Repellent', itemCost: 15.99 }
      ]
    },
    {
      id: 9,
      customerId: 9,
      orderItems: [
        { id: 19, productName: 'Saddle', itemCost: 599.99 },
        { id: 20, productName: 'Riding cap', itemCost: 79.99 }
      ]
    },
    {
      id: 10,
      customerId: 10,
      orderItems: [
        { id: 21, productName: 'Baseball', itemCost: 9.99 },
        { id: 22, productName: 'Bat', itemCost: 19.99 }
      ]
    }
  ];
