import React from 'react';
import ProductDisplay from './components/ProductDisplay';

const products = [
  {
    name: 'Netgear Nighthawk AX12',
    image:
      'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg',
    description: `This high-performance router supports WiFi 6 technology for blazing-fast speeds.\nPerfect for large households with many devices.\nAdvanced security features keep your network protected.`,
    cost: 299.99,
    stock: 0,
  },
  {
    name: 'TP-Link Archer AX90',
    image:
      'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg',
    description: `Experience seamless connectivity with tri-band support and strong range.\nIdeal for streaming, gaming, and working from home.\nBacked by a 2-year warranty and 24/7 support.`,
    cost: 249.99,
    stock: 5,
  },
  {
    name: 'ASUS ROG Rapture GT-AX11000',
    image:
      'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg',
    description: `Engineered for gamers with low-latency performance and powerful CPU.\nCustomizable lighting and VPN fusion support included.\nTake your gaming and streaming to the next level.`,
    cost: 429.99,
    stock: 3,
  },
  {
    name: 'Google Nest WiFi Pro',
    image:
      'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg',
    description: `Sleek and simple mesh system for effortless whole-home coverage.\nAutomatically updates and optimizes your connection.\nPerfect for tech-savvy households and smart homes.`,
    cost: 199.99,
    stock: 12,
  },
  {
    name: 'Ubiquiti AmpliFi Alien',
    image:
      'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg',
    description: `Next-gen mesh WiFi system with touchscreen display.\nHandles multiple 4K streams with ease.\nAdvanced configuration options for power users.`,
    cost: 379.99,
    stock: 4,
  },
];

export default function App() {
  return (
    <div>
      <div className="text-4xl font-bold text-center mt-8">Kevin Smith</div>
      <nav className="w-full bg-gray-800 text-white p-4 flex justify-between items-center mb-6">
        <div className="text-xl font-bold">YourSite</div>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </nav>
      {products.map((product, index) => {
        return <ProductDisplay product={product} key={index} />;
      })}
    </div>
  );
}
