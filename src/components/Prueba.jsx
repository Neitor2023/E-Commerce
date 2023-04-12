import React, { useState } from 'react';
import { productsData } from './productsData'; // Importamos el objeto de productos desde otro componente

function ProductCard() {
  const [productCard, setProductCard] = useState({}); // Declaramos el estado como objeto vacío

  // Utilizamos el método map para recorrer el objeto de productos y llenar el estado
  const fillProductCard = () => {
    let productObj = {};
    productsData.map((product) => {
      productObj[product.id] = {
        id: product.id,
        productId: product.productId,
        quantity: product.quantity,
        name: product.name,
        price: product.price,
      };
    });
    setProductCard(productObj);
  };

  // Llamamos a la función para llenar el estado cuando se monta el componente
  React.useEffect(() => {
    fillProductCard();
  }, []);

  return (
    <div>
      <h2>Product Card Component</h2>
      {Object.keys(productCard).map((key) => (
        <div key={key}>
          <p>Name: {productCard[key].name}</p>
          <p>Product ID: {productCard[key].productId}</p>
          <p>Quantity: {productCard[key].quantity}</p>
          <p>Price: {productCard[key].price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
