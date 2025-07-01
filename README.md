# 🛒 E-Cart – React E-commerce Cart Application

A simple and responsive e-commerce shopping cart built with **React**, **Vite**, **Tailwind CSS**, and **Context API**.

## 🚀 Features

- 📦 Product listing with image, description, and price
- ➕ Add products to cart
- 🔁 Increase/Decrease quantity (1–10 only)
- 🗑 Remove individual items or clear the entire cart
- ✅ Proceed to checkout page
- 🔔 Real-time toast notifications (add/remove/limit reached)

## 📁 Folder Structure
src/
├── components/
│ ├── cart/ # Cart UI (Drawer, Items)
│ ├── layout/ # Header & Layout
│ └── ui/ # Toast, Buttons etc.
| |------> product -> ProductCard /ProductList

├── contexts/ # CartContext Provider
├── data/ # Product JSON Data
├── hooks/ # Custom hook (useCart)
├── pages/ # Home, Checkout
├── App.jsx
└── main.jsx

## Install dependencies
npm install

## Run the dev server
npm run dev