import React from 'react';

type ProductDisplayProps = {
  product: ProductProps;
};
type ProductProps = {
  name: string;
  image: string;
  description: string;
  cost: number;
  stock: number;
};

export default function ProductDisplay({ product }: ProductDisplayProps) {
  const { name, image, description, cost, stock } = product;
  return (
    <div className="max-w-5xl mx-auto p-4 border rounded-lg mb-8 flex flex-row items-center space-x-6">
      <img
        src={image}
        alt={name}
        className="w-24 sm:w-32 md:w-40 lg:w-48 object-contain mr-6 flex-shrink-0"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-700 mt-2 whitespace-pre-line flex-grow">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold">${cost.toFixed(2)}</span>
          <button
            type="button"
            disabled={stock <= 0}
            className={`px-4 py-2 rounded text-white ${
              stock > 0
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}
