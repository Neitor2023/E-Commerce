import React, { useState } from 'react';

function ProductCard() {
  const [productCard, setProductCard] = useState([]);

  const updateQuantity = (id, amount) => {
    setProductCard(prevState => {
      const newProductCard = [...prevState];
      const index = newProductCard.findIndex(product => product.id === id);
      newProductCard[index] = { ...newProductCard[index], quantity: newProductCard[index].quantity + amount };
      return newProductCard;
    });
  };

  const handleIncreaseQuantity = (id) => {
    updateQuantity(id, 1);
  };

  const handleDecreaseQuantity = (id) => {
    updateQuantity(id, -1);
  };

  const otherComponentData = [
    { id: 3641, productId: 10, quantity: 10 },
    { id: 3642, productId: 11, quantity: 5 },
    { id: 3643, productId: 12, quantity: 7 },
    // ... otros productos
  ];

  // Actualizamos el estado del componente con los datos del otro componente
  useState(() => {
    setProductCard(otherComponentData);
  }, []);

  return (
    <div>
      <h2>Product Card</h2>
      {productCard.map(product => (
        <div key={product.id}>
          <p>ID: {product.id}</p>
          <p>Product ID: {product.productId}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
          <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
