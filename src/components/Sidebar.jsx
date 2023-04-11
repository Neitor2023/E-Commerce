import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';
import { getProductsCardThunk } from '../store/slices/productsCard.slice';

const Sidebar = ( { show, handleClose} ) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductsCardThunk())
    },[])
    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Sidebar;