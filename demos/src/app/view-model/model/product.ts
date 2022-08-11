export class Product {
  id = 0;
  productName = '';
  price = 0;

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
