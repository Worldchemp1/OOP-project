# 🛍️ Product Management System

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/product-management-ts.svg)](https://github.com/yourusername/product-management-ts/stargazers)

A **complete TypeScript-based Product Management system** built with Object-Oriented Programming principles, featuring **CRUD operations** and a **beautiful web interface**. Perfect for learning TypeScript, OOP, and modern web development!

## ✨ **Live Demo**

🌐 **[Try it live!](https://yourusername.github.io/product-management-ts/)**

## 🎯 **Learning Objectives**

This project demonstrates:
- ✅ **TypeScript Interfaces** - Proper type definitions and type safety
- ✅ **CRUD Operations** - Create, Read, Update, Delete functionality
- ✅ **OOP Principles** - Encapsulation, Abstraction, Polymorphism
- ✅ **Array Methods** - Search, filter, and data manipulation
- ✅ **Modern Web Development** - ES modules, responsive design

## ✨ Features

- **Product Interface**: Defines the structure for products with required and optional fields
- **ProductManager Class**: Implements all CRUD operations (Create, Read, Update, Delete)
- **TypeScript**: Full type safety and modern ES2020 features
- **Web Interface**: Beautiful HTML/CSS interface to display results
- **Sample Data**: Pre-loaded with sample products for demonstration

## 🏗️ Project Structure

```
Project/
├── src/
│   ├── interfaces/
│   │   └── Product.ts          # Product interface definition
│   ├── classes/
│   │   └── ProductManager.ts   # Main ProductManager class
│   └── index.ts                # Main application logic
├── dist/                       # Compiled JavaScript (generated)
├── index.html                  # Web interface
├── package.json                # Project dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Compile TypeScript to JavaScript:**
   ```bash
   npm run build
   ```

3. **Open the web interface:**
   - Open `index.html` in your web browser
   - Or serve it using a local server

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch for changes and recompile automatically
- `npm start` - Run the compiled JavaScript (Node.js environment)

## 📋 Product Interface

```typescript
interface Product {
  id: number;           // Unique identifier
  name: string;         // Product name
  price: number;        // Product price
  category: string;     // Product category
  description?: string; // Optional description
}
```

## 🔧 ProductManager Class Methods

### Core CRUD Operations

- **`createProduct(product: Product)`** - Add a new product
- **`getProductById(id: number)`** - Retrieve a product by ID
- **`updateProduct(id: number, updatedData: Partial<Product>)`** - Update product data
- **`deleteProduct(id: number)`** - Remove a product
- **`getAllProducts()`** - Get all products

### Additional Utility Methods

- **`getProductsByCategory(category: string)`** - Filter products by category
- **`getProductCount()`** - Get total number of products

## 💡 Usage Examples

### Creating Products

```typescript
const productManager = new ProductManager();

const laptop: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  category: "Electronics",
  description: "High-performance laptop"
};

productManager.createProduct(laptop);
```

### Updating Products

```typescript
// Update price and description
productManager.updateProduct(1, {
  price: 1099.99,
  description: "Updated description"
});
```

### Retrieving Products

```typescript
// Get by ID
const product = productManager.getProductById(1);

// Get all products
const allProducts = productManager.getAllProducts();

// Get by category
const electronics = productManager.getProductsByCategory("Electronics");
```

## 🌐 Web Interface

The `index.html` file provides a beautiful, responsive web interface that:

- Automatically loads and displays all product management operations
- Shows sample products with their details
- Demonstrates CRUD operations in action
- Features a modern, gradient-based design
- Includes interactive buttons for refreshing and clearing results

## 🔄 Development Workflow

1. **Edit TypeScript files** in the `src/` directory
2. **Compile** with `npm run build`
3. **Refresh** the browser to see changes
4. **Use watch mode** with `npm run watch` for automatic recompilation

## 📝 TypeScript Configuration

The project uses a modern TypeScript configuration with:

- ES2020 target for modern JavaScript features
- Strict type checking enabled
- Source maps for debugging
- Declaration files generation
- CommonJS module system

## 🎯 Key OOP Principles Demonstrated

- **Encapsulation**: Private products array with public methods
- **Inheritance**: Extensible class structure
- **Polymorphism**: Flexible method signatures
- **Abstraction**: Clean interface definitions

## 🤝 Contributing

Feel free to extend this project by:

- Adding new product categories
- Implementing search functionality
- Adding data persistence (localStorage, database)
- Creating additional utility methods
- Enhancing the web interface

## 📄 License

This project is licensed under the MIT License.

---

**Happy Coding! 🚀**
