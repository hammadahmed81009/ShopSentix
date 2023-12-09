import React from 'react';

export default function SavedFiles() {

    const products = [
        {
          name: 'Product A',
          price: 99.99,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'Product B',
          price: 49.99,
          description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            name: 'Product A',
            price: 99.99,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        
        // Add more products as needed
      ];
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
        <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-6">Saved Files</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-800">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
