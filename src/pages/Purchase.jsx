import { useEffect, useState } from "react";
import getConfig from '../utils/getConfig'
import axios from "axios";

const Purchase = () => {
  const [productsCard, setProductsCard ] = useState([])
  useEffect(() => {
    axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases",getConfig())
    .then((resp)=> setProductsCard(resp.data))
  }, [])

  return (
    <div>
      <h1>Purchase</h1>
      <ul>
        {productsCard.map(item => (
          <li key={item.id}>
            <img src={item.product?.images[0].url} style={{ width: 80, objectFit: "contain" }} alt="" />
            {item.product?.title}
            {item.quantity}
            {/* {item.productId} */}
            {/* {item.product?.id} */}
            {/* {item.product?.description} */}
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default Purchase;