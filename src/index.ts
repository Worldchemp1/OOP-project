import { ProductManager } from "./classes/ProductManager.js";
import { Product } from "./interfaces/Product.js";

// Initialize the product manager
const productManager = new ProductManager();

// Sample products data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    category: "Electronics",
    description: "High-performance laptop for work and gaming",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 599.99,
    category: "Electronics",
    description: "Latest smartphone with advanced features",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 89.99,
    category: "Home & Kitchen",
    description: "Automatic coffee maker for daily use",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 129.99,
    category: "Sports",
    description: "Comfortable running shoes for athletes",
  },
  {
    id: 5,
    name: "Book: TypeScript Guide",
    price: 39.99,
    category: "Books",
    description: "Complete guide to TypeScript programming",
  },
];

// Function to display results in the browser
function displayResults() {
  const resultsDiv = document.getElementById("results");
  if (!resultsDiv) return;

  let html = "<h2>Product Management System Results</h2>";

  // Add sample products
  html += "<h3>1. Adding Sample Products</h3>";
  sampleProducts.forEach((product) => {
    try {
      productManager.createProduct(product);
      html += `<p>✅ Added: ${product.name} (ID: ${product.id})</p>`;
    } catch (error) {
      html += `<p>❌ Error: ${error}</p>`;
    }
  });

  // Display all products
  html += "<h3>2. All Products</h3>";
  const allProducts = productManager.getAllProducts();
  html += `<p>Total Products: ${productManager.getProductCount()}</p>`;

  allProducts.forEach((product) => {
    html += `
      <div class="product-card">
        <h4>${product.name}</h4>
        <p><strong>ID:</strong> ${product.id}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        ${
          product.description
            ? `<p><strong>Description:</strong> ${product.description}</p>`
            : ""
        }
      </div>
    `;
  });

  // Get product by ID
  html += "<h3>3. Get Product by ID (ID: 2)</h3>";
  const productById = productManager.getProductById(2);
  if (productById) {
    html += `<p>✅ Found: ${productById.name} - $${productById.price}</p>`;
  } else {
    html += "<p>❌ Product not found</p>";
  }

  // Update product
  html += "<h3>4. Update Product (ID: 1)</h3>";
  const updatedProduct = productManager.updateProduct(1, {
    price: 1099.99,
    description: "Updated: Premium laptop with enhanced features",
  });
  if (updatedProduct) {
    html += `<p>✅ Updated: ${updatedProduct.name} - New Price: $${updatedProduct.price}</p>`;
  } else {
    html += "<p>❌ Product not found for update</p>";
  }

  // Get products by category
  html += "<h3>5. Products by Category (Electronics)</h3>";
  const electronicsProducts =
    productManager.getProductsByCategory("Electronics");
  electronicsProducts.forEach((product) => {
    html += `<p>📱 ${product.name} - $${product.price}</p>`;
  });

  // Delete product
  html += "<h3>6. Delete Product (ID: 5)</h3>";
  const deleteResult = productManager.deleteProduct(5);
  if (deleteResult) {
    html += "<p>✅ Product deleted successfully</p>";
  } else {
    html += "<p>❌ Product not found for deletion</p>";
  }

  // Show final product count
  html += "<h3>7. Final Results</h3>";
  html += `<p>Final Product Count: ${productManager.getProductCount()}</p>`;

  const finalProducts = productManager.getAllProducts();
  finalProducts.forEach((product) => {
    html += `<p>• ${product.name} (ID: ${product.id})</p>`;
  });

  resultsDiv.innerHTML = html;
}

// Export for use in browser
if (typeof window !== "undefined") {
  (window as any).displayResults = displayResults;
} else {
  // If running in Node.js environment
  console.log("Running in Node.js environment");
  displayResults();
}
