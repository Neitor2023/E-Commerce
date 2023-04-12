import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsCardThunk, checkoutProductsCardThunk } from '../store/slices/productsCard.slice';
import Quantity from './Quantity';
import axios from 'axios';
import getConfig from '../utils/getConfig'

const Sidebar = ({ show, handleClose }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductsCardThunk())
    }, [])
    const productsCard = useSelector(state => state.productsCard)
    const Quantit = (id_op, id, Qua) => {
        // console.log("Qua ",Qua)
        console.log("id_op, id, Qua ",id_op, id, Qua)
        // const quant_obj ={
        //     Id: '',
        //     productId: '',
        //     quantity: ''    
        // }
        // dispatch(createProductsCardThunk(data))
            // const data ={
            //     quantity: Qua,
            // }

        // axios                 
        // .put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id_op}`,data, getConfig())
        // .then(() => dispatch(getProductsCardThunk()))
        // .catch(error => console.error(error))
    }
    
    const [quant_obj, setQuant_obj ] = useState(
    productsCard.map(item => {
        return {
            Id: item.id,
            productId: item.product?.id,
            quantity: item.quantity
        }
    }))
//  console.log("quant_obj", quant_obj)
    // const fillObj = () => {

    //     const options = seleData.results?.map(item => {
    //         return {
    //             value: item.id,
    //             label: item.name
    //         }
    //     })
    
        
    //     {productsCard.map(item => (
    //         let quant_obj = {
    //             Id: item.id,
    //             productId: item.product?.id,
    //             quantity: item.quantity
    //         }
    //     ))
    //     }
    // }
    // fillObj()
    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de Compra</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {productsCard.map(item => (
                        // setQuantityCard(item.product?.quantity)
                        // ,
                        <li key={item.id}>
                            <img src={item.product?.images[0].url} style={{ width: 80, objectFit: "contain" }} alt="" />
                            {item.product?.title}
                            {item.quantity}
                            {/* {item.productId} */}
                            Id Product
                            {item.product?.id}
                            {/* {item.product?.description} */}
                            <br />
                            <Button
                            onClick={()=> Quantit(item.id, item.product?.id, (item.quantity+1))}
                            >+</Button>
                            {/* {quantityCard} */}
                            {/* {item.product?.quantity} */}
                            {item.quantity}
                            <Button>-</Button>
                            {/* 
                            <Quantity
                                IdProduct={item.product?.id}
                                Quantity={item.quantity}
                                quantityCard={Quamtity=> Quantit(Quamtity)}
                            />
                            */}
                        </li>
                        
                        
                    ))
                    }
                </ul>
                <Button
                    onClick={() => dispatch(checkoutProductsCardThunk())}
                >Checkout</Button>
                <br />

            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Sidebar;