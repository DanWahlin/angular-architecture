export class Product {
  id: number;
  productName: string;
  price: number;

  static create(id: number, product: Partial<Product> = {}) {
    const newProduct = Object.assign(new Product(), {
      // Defaults
      productName: 'New Product ' + id,
      price: 0,
      ...product,
      id
    });
    return newProduct;
  }
}
