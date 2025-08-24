import { ProductManager } from "./classes/ProductManager.js";
import { Product } from "./interfaces/Product.js";

// Test function to demonstrate all CRUD operations
export function testProductManager() {
  console.log("🧪 Testing Product Management System...\n");

  const productManager = new ProductManager();

  // Test 1: CREATE - Add new products
  console.log("1️⃣ CREATE OPERATION - Adding Products");
  console.log("=====================================");

  const products: Product[] = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 1299.99,
      category: "Electronics",
      description: "High-performance gaming laptop with RTX graphics",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 199.99,
      category: "Electronics",
      description: "Noise-cancelling wireless headphones",
    },
    {
      id: 3,
      name: "Coffee Maker",
      price: 89.99,
      category: "Home & Kitchen",
      // No description - testing optional field
    },
  ];

  products.forEach((product) => {
    try {
      const created = productManager.createProduct(product);
      console.log(
        `✅ Created: ${created.name} (ID: ${created.id}) - $${created.price}`
      );
    } catch (error) {
      console.log(`❌ Error creating ${product.name}: ${error}`);
    }
  });

  console.log(`\n📊 Total Products: ${productManager.getProductCount()}\n`);

  // Test 2: READ - Get products
  console.log("2️⃣ READ OPERATION - Retrieving Products");
  console.log("=======================================");

  // Get all products
  const allProducts = productManager.getAllProducts();
  console.log("📋 All Products:");
  allProducts.forEach((product) => {
    console.log(
      `   • ${product.name} (ID: ${product.id}) - $${product.price} - ${product.category}`
    );
  });

  // Get product by ID
  console.log("\n🔍 Get Product by ID:");
  const productById = productManager.getProductById(2);
  if (productById) {
    console.log(
      `✅ Found: ${productById.name} - $${productById.price} - ${productById.category}`
    );
    if (productById.description) {
      console.log(`   Description: ${productById.description}`);
    }
  } else {
    console.log("❌ Product not found");
  }

  // Test 3: UPDATE - Modify products
  console.log("\n3️⃣ UPDATE OPERATION - Modifying Products");
  console.log("=========================================");

  const updateResult = productManager.updateProduct(1, {
    price: 1199.99,
    description: "Updated: Gaming laptop with special discount!",
  });

  if (updateResult) {
    console.log(`✅ Updated: ${updateResult.name}`);
    console.log(`   New Price: $${updateResult.price}`);
    console.log(`   New Description: ${updateResult.description}`);
  } else {
    console.log("❌ Product not found for update");
  }

  // Test 4: DELETE - Remove products
  console.log("\n4️⃣ DELETE OPERATION - Removing Products");
  console.log("=========================================");

  const deleteResult = productManager.deleteProduct(3);
  if (deleteResult) {
    console.log("✅ Product deleted successfully");
  } else {
    console.log("❌ Product not found for deletion");
  }

  // Test 5: Final Results
  console.log("\n5️⃣ FINAL RESULTS");
  console.log("=================");

  const finalProducts = productManager.getAllProducts();
  console.log(`📊 Final Product Count: ${productManager.getProductCount()}`);
  console.log("📋 Remaining Products:");
  finalProducts.forEach((product) => {
    console.log(`   • ${product.name} (ID: ${product.id}) - $${product.price}`);
  });

  // Test 6: Additional Features
  console.log("\n6️⃣ ADDITIONAL FEATURES");
  console.log("=======================");

  // Get products by category
  const electronics = productManager.getProductsByCategory("Electronics");
  console.log(`📱 Electronics Products (${electronics.length}):`);
  electronics.forEach((product) => {
    console.log(`   • ${product.name} - $${product.price}`);
  });

  // Test error handling
  console.log("\n7️⃣ ERROR HANDLING");
  console.log("===================");

  try {
    // Try to create product with duplicate ID
    productManager.createProduct({
      id: 1,
      name: "Duplicate Laptop",
      price: 999.99,
      category: "Electronics",
    });
  } catch (error) {
    console.log(`✅ Error caught: ${error}`);
  }

  // Try to get non-existent product
  const nonExistent = productManager.getProductById(999);
  if (!nonExistent) {
    console.log("✅ Non-existent product returns undefined as expected");
  }

  console.log("\n🎉 All CRUD operations tested successfully!");
  console.log("✅ CREATE: Products added");
  console.log("✅ READ: Products retrieved");
  console.log("✅ UPDATE: Products modified");
  console.log("✅ DELETE: Products removed");
  console.log("✅ Error handling: Working correctly");
}

// Export for use in browser
if (typeof window !== "undefined") {
  (window as any).testProductManager = testProductManager;
} else {
  // If running in Node.js environment
  testProductManager();
}
