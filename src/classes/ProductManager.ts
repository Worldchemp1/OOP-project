import { Product } from "../interfaces/Product.js";

export class ProductManager {
  private products: Product[] = [];

  // Create a new product
  createProduct(product: Product): Product {
    // Check if product with same ID already exists
    if (this.products.find((p) => p.id === product.id)) {
      throw new Error(`Product with ID ${product.id} already exists`);
    }

    this.products.push(product);
    return product;
  }

  // Get a product by ID
  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  // Update a product by ID
  updateProduct(
    id: number,
    updatedData: Partial<Product>
  ): Product | undefined {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex === -1) {
      return undefined;
    }

    // Update the product with new data
    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updatedData,
    };

    return this.products[productIndex];
  }

  // Delete a product by ID
  deleteProduct(id: number): boolean {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    if (productIndex === -1) {
      return false;
    }

    this.products.splice(productIndex, 1);
    return true;
  }

  // Get all products
  getAllProducts(): Product[] {
    return [...this.products]; // Return a copy to prevent external modification
  }

  // Get products by category
  getProductsByCategory(category: string): Product[] {
    return this.products.filter((product) => product.category === category);
  }

  // Get total number of products
  getProductCount(): number {
    return this.products.length;
  }
}
