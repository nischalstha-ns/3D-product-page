# 3D Product Page - XAMPP Version

## Setup Instructions

1. **Install XAMPP** and start Apache + MySQL
2. **Create Database**:
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Create database named `products_db`
3. **Copy Files**:
   - Copy this entire folder to `C:\xampp\htdocs\3d-product-page\`
4. **Access**:
   - Open http://localhost/3d-product-page/

## Features

- **3D Product Viewer** - Three.js with rotating product model
- **PHP Backend** - MySQL database with product API
- **Responsive Design** - Works on desktop and mobile

## File Structure

```
3d-product-page/
├── index.html          # Main page with React + Three.js
├── api/
│   └── products.php    # PHP API endpoint
└── README.md
```

The database table and sample data are created automatically on first API call.