# 🛍️ Product API – Week 2 Express.js Assignment

A simple RESTful API built with **Express.js** for managing products.  
Includes routing, middleware, authentication, filtering, pagination, and error handling.

---

## 🚀 Getting Started

###  Prerequisites
- Node.js (v18+ recommended)
- npm

###  Installation
```bash
git clone <your-repo-url>
cd week-2-Assignment
npm install

### Environment set up
PORT=3000
API_KEY=12345

### Start the server
npm run dev
```
## Query Parameters
| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| category | string | Filter products by category  |
| page     | number | Page number (default: 1)     |
| limit    | number | Items per page (default: 10) |

### Retrieving data
```bash
GET /api/products?category=electronics&page=1&limit=2
```

### Response
``` bash
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  }
]
```

Made by Kamau Joseph
