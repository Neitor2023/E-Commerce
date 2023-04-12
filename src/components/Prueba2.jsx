import React, { useState } from 'react';

function ProductCard() {
  const [productCard, setProductCard] = useState({});

  const updateQuantity = (amount) => {
    setProductCard(prevState => ({ ...prevState, quantity: prevState.quantity + amount }));
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(1);
  };

  const handleDecreaseQuantity = () => {
    updateQuantity(-1);
  };

  const otherComponentData = { id: 3641, productId: 10, quantity: 10 };

  // Actualizamos el estado del componente con los datos del otro componente
  useState(() => {
    setProductCard(otherComponentData);
  }, []);

  return (
    <div>
      <h2>Product Card</h2>
      <p>ID: {productCard.id}</p>
      <p>Product ID: {productCard.productId}</p>
      <p>Quantity: {productCard.quantity}</p>
      <button onClick={handleIncreaseQuantity}>+</button>
      <button onClick={handleDecreaseQuantity}>-</button>
    </div>
  );
}

export default ProductCard;
