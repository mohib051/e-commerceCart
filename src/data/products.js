 import headphone from "../assets/headphone.avif";
 import charger from "../assets/charger.avif";
 import mouse from "../assets/mouse.avif";
 import speaker from "../assets/speaker.avif";
 import typeC from "../assets/typeC.avif";
 import watch from "../assets/watch.avif";
 
 
 const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: headphone,
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Audio",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: watch,
    description: "Advanced fitness tracking with heart rate monitor, GPS, and waterproof design.",
    category: "Wearables",
  },
  {
    id: 3,
    name: "Portable Phone Charger",
    price: 29.99,
    image: charger,
    description: "10,000mAh power bank with fast charging and multiple USB ports.",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 39.99,
    image: mouse,
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    category: "Computer",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 49.99,
    image: typeC,
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader.",
    category: "Computer",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 89.99,
    image: speaker,
    description: "Portable waterproof speaker with 360-degree sound and 12-hour battery.",
    category: "Audio",
  },
]

export default products;