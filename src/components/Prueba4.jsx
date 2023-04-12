import React, { useState } from 'react';

function ProductCard() {
  const [productCard, setProductCard] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === product.id);
      if (index !== -1) {
        return [
          ...prevCart.slice(0, index),
          { ...prevCart[index], quantity: prevCart[index].quantity + 1 },
          ...prevCart.slice(index + 1)
        ];
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === product.id);
      if (prevCart[index].quantity > 1) {
        return [
          ...prevCart.slice(0, index),
          { ...prevCart[index], quantity: prevCart[index].quantity - 1 },
          ...prevCart.slice(index + 1)
        ];
      } else {
        return [...prevCart.slice(0, index), ...prevCart.slice(index + 1)];
      }
    });
  };

  const handleCheckout = () => {
    setProductCard(cart);
    setCart([]);
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
          <button onClick={() => handleAddToCart(product)}>+</button>
          <button onClick={() => handleRemoveFromCart(product)}>-</button>
        </div>
      ))}
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>Product ID: {item.productId}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      {cart.length > 0 &&
        <button onClick={handleCheckout}>Checkout</button>
      }
    </div>
  );
}

export default ProductCard;
