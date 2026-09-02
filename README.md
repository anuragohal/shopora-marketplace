# 🏪 Shopora - Local Business Product Discovery Platform

[![GitHub](https://img.shields.io/badge/GitHub-anuragohal-blue)](https://github.com/anuragohal/shopora-marketplace)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Find Stores Beyond Streets** - Empowering local businesses with digital presence and helping customers discover products from nearby shops.

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## 🎯 About

**Shopora** is a Local Business Product Discovery Platform that bridges the gap between neighborhood shop owners and customers. Many local businesses remain invisible online — customers walk past great shops simply because they don't know they exist. Shopora was built to change that.

### The Problem We Solve

- **No Digital Visibility**: Many local businesses are completely offline and invisible to potential customers
- **Hard to Find Nearby Products**: Customers struggle to discover what products are available in shops around the corner
- **No Centralized Marketplace**: There is no single platform where local shops and products are listed together
- **Difficult to Attract Customers**: Small businesses find it hard to compete without expensive marketing tools

### Our Solution

Shopora provides:
- **For Shop Owners**: Easy shop registration, product management, digital storefront, and customer analytics
- **For Customers**: Location-based search, product discovery, shop comparison, and reviews

---

## ✨ Features

### For Shop Owners (Sellers)
- 🏪 **Shop Registration** - Quick and easy shop profile creation
- 📦 **Product Management** - Add, edit, delete products with images
- 🏷️ **Category Organization** - Organize products by categories
- 📊 **Seller Dashboard** - Manage inventory and track performance
- 📸 **Image Upload** - Upload product and shop images
- ⭐ **Ratings & Reviews** - Build credibility with customer feedback
- 🎁 **2-Month Free Trial** - Start for free, grow with us

### For Customers
- 🔍 **Smart Search** - Search by product name, category, or location
- 📍 **Nearby Discovery** - Find shops and products based on location
- 🛍️ **Product Browsing** - Browse products across multiple shops
- ⚖️ **Compare Options** - Compare prices and products
- ⭐ **Reviews** - Read and leave reviews for shops
- 🗺️ **Get Directions** - Navigate to shops easily

### Platform Features
- 🔐 **Secure Authentication** - Email/password with bcrypt encryption
- 👥 **Role-Based Access** - Customer, Seller, and Admin roles
- 🎨 **Modern UI/UX** - Responsive design with smooth animations
- 📱 **Mobile Friendly** - Works seamlessly on all devices
- 🌐 **RESTful API** - Clean API architecture
- 💾 **MongoDB Database** - Scalable data storage

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **bcrypt.js** - Password hashing
- **CORS** - Cross-origin resource sharing

### Landing Page (React Version)
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations

---

## 📁 Project Structure

```
shopora-marketplace/
│
├── images/                          # Static images
│   ├── about.jpg
│   └── login.jpg
│
├── videos/                          # Background videos
│   ├── b1.mp4
│   └── welcome.mp4
│
├── video backgrounds/               # Video thumbnails
│   ├── cloths shop.jpg
│   ├── farm.jpg
│   ├── mall.jpg
│   └── refrigerator-with-food.jpg
│
├── user1/                          # Seller Dashboard
│   ├── Dashboard.html              # Main seller dashboard
│   ├── dashboard.css               # Dashboard styles
│   ├── add-product.html            # Add product page
│   ├── add-product.css             # Add product styles
│   ├── products1.html              # Product list view
│   ├── products1.css               # Product list styles
│   ├── customer-visitor.html       # Customer analytics
│   └── setting-admin-shop.html     # Shop settings
│
├── mystore-backend/                # Backend API Server
│   ├── server.js                   # Main server file
│   ├── package.json                # Backend dependencies
│   └── package-lock.json
│
├── shopora-landing/                # React Landing Page
│   ├── src/
│   │   ├── components/             # React components
│   │   ├── sections/               # Page sections
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── index.html                      # Main landing page
├── style.css                       # Main styles
│
├── login.html                      # Login page
├── login.css                       # Login styles
├── register.html                   # Registration page
├── ragister.css                    # Registration styles
│
├── welcome-registation.html        # Welcome/Onboarding
├── welcome-reg.css                 # Welcome styles
│
├── 1question-existing-or-not.html  # Onboarding question 1
├── 1question-existing-or-not.css
├── 2question.html                  # Onboarding question 2
├── 3question.html                  # Onboarding question 3
├── store-name.html                 # Store naming
│
├── market.html                     # Marketplace browse
├── market-shops.html               # Shop listings
├── market-shops-clothings.html     # Category: Clothing
├── market-shops-home-decor.html    # Category: Home Decor
│
├── cat.html                        # Category page
├── cat.css                         # Category styles
│
├── shop1.html                      # Individual shop page
├── products1.html                  # Product listing
├── products1.css                   # Product styles
│
├── admin.html                      # Admin dashboard
├── setting-admin-shop.html         # Admin settings
│
├── summary.html                    # Order summary
├── success.html                    # Success page
│
├── shop-serach.js                  # Search functionality
├── server.js                       # Alternative backend
│
├── .gitignore                      # Git ignore file
└── README.md                       # This file
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (v4 or higher)
- **npm** or **yarn**

### Step 1: Clone the Repository

```bash
git clone https://github.com/anuragohal/shopora-marketplace.git
cd shopora-marketplace
```

### Step 2: Install Backend Dependencies

```bash
cd mystore-backend
npm install
```

### Step 3: Start MongoDB

```bash
# Make sure MongoDB is running
mongod
```

### Step 4: Start Backend Server

```bash
cd mystore-backend
node server.js
```

The backend server will run on `http://localhost:5000`

### Step 5: Open Frontend

Open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000
```

Visit `http://localhost:8000` in your browser.

### Step 6 (Optional): Run React Landing Page

```bash
cd shopora-landing
npm install
npm run dev
```

React app will run on `http://localhost:5173`

---

## 📖 Usage

### For Shop Owners

1. **Register**: Go to the registration page and create an account
2. **Onboarding**: Answer a few questions about your business
3. **Setup Shop**: Add shop name, address, and contact details
4. **Add Products**: Upload products with images, prices, and categories
5. **Manage**: Use the dashboard to manage inventory and track performance

### For Customers

1. **Browse**: Visit the marketplace to explore shops and products
2. **Search**: Use the search bar to find specific products or shops
3. **Filter**: Filter by category, location, or price
4. **Compare**: Compare products across different shops
5. **Review**: Leave reviews and ratings for shops

### For Admins

1. **Dashboard**: Access the admin panel
2. **Manage Users**: View and manage all registered users
3. **Moderate**: Review and moderate shop listings
4. **Analytics**: View platform statistics and insights

---

## 🔌 API Endpoints

### Authentication

```http
POST /register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string",
  "shopName": "string"
}
```

```http
POST /login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}
```

### Products

```http
POST /add-product
Content-Type: application/json

{
  "name": "string",
  "price": number,
  "category": "string",
  "image": "string (base64)",
  "userId": "string"
}
```

```http
GET /products/:userId
```

```http
DELETE /delete-product/:id
```

### Admin

```http
GET /admin/users
```

```http
DELETE /admin/delete-user/:id
```

---

## 📸 Screenshots

_Coming soon - Add screenshots of your application_

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👥 Team

**Project By:** F.Y.B.Tech CSE Group  
**Institution:** D.Y. Patil School of Engineering and Management  
**Year:** 2025-2026

### Contributors
- Add team member names here

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- All local businesses who inspired this project
- Our mentors and faculty at D.Y. Patil School of Engineering

---

## 📞 Contact

**Project Link:** [https://github.com/anuragohal/shopora-marketplace](https://github.com/anuragohal/shopora-marketplace)

**Support:** For any queries or support, please open an issue on GitHub.

---

<div align="center">
  <p>Made with ❤️ for Local Businesses</p>
  <p>© 2026 Shopora - All Rights Reserved</p>
</div>
