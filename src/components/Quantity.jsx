import { useState } from "react";
import Button from 'react-bootstrap/Button';

const Quantity = ({IdProduct, Quantity}) => {
    const [quantityCard, setQuantityCard ] = useState(Quantity)
    return (
        <div>
            <Button
            onClick={()=> {
                setQuantityCard(quantityCard+1)
            }}
            // onClick={setQuantityCard(quantityCard+1)}
            >+</Button>
            {quantityCard}
            <Button
            onClick={()=> quantityCard > 1 ? setQuantityCard(quantityCard-1):quantityCard}
            >-</Button>
        </div>
    );
};

export default Quantity;