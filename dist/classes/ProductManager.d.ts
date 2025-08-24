import { Product } from "../interfaces/Product.js";
export declare class ProductManager {
    private products;
    createProduct(product: Product): Product;
    getProductById(id: number): Product | undefined;
    updateProduct(id: number, updatedData: Partial<Product>): Product | undefined;
    deleteProduct(id: number): boolean;
    getAllProducts(): Product[];
    getProductsByCategory(category: string): Product[];
    getProductCount(): number;
}
//# sourceMappingURL=ProductManager.d.ts.map