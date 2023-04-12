import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsCardThunk, checkoutProductsCardThunk } from '../store/slices/productsCard.slice';
import Quantity from './Quantity';
import axios from 'axios';
import getConfig from '../utils/getConfig'

const Sidebar = ( { show, handleClose} ) => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProductsCardThunk())
    },[])
    const productsCard =  useSelector(state => state.productsCard)
    const Quantit = (Quant,id) =>{
        alert("llegue")
        // dispatch(createProductsCardThunk(data))
        //     const data ={
        //         quantity: Quant,
        //         productId: id
        //     }
        
        // axios
        // .put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`,data, getConfig())
        // .then(() => dispatch(getProductsCardThunk()))
        // .catch(error => console.error(error))
    }
    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito de Compra</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {productsCard.map( item => (
                            // setQuantityCard(item.product?.quantity)
                            // ,
                        <li key={ item.id}>
                            <img src={item.product?.images[0].url} style={{width:80, objectFit: "contain"}}alt="" />
                            {item.product?.title}
                            {item.quantity}
                            {/* {item.productId} */}
                            {/* {item.product?.id} */}
                            {/* {item.product?.description} */}
                            <br />
                            
                            {/* <Button>+</Button> */}
                            {/* {quantityCard} */}
                            {/* {item.product?.quantity} */}
                            {/* <Button>-</Button> */}
                            <Quantity 
                            Quantity={item.quantity}
                            quantityCard={Quamtity=> Quantit(Quamtity)}
                            />
                        </li>
                    ))
                    }
                </ul>

            </Offcanvas.Body>
            <Button
            onClick={()=>dispatch(checkoutProductsCardThunk())}
            >Checkout</Button>
            <br />
        </Offcanvas>
    );
}

export default Sidebar;