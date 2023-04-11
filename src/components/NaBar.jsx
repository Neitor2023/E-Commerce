
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import FavoriteSidebar from './FavoritesSidebar'

const NavBar = () => {
    const [ show, setShow ] = useState(false)
    const handleClose = () => {
        setShow(false)
    }
    
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">News App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                <Nav.Link 
                onClick={ () => setShow(true) }
                >Favorites (sidebar)</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <FavoriteSidebar
        show={ show }
        handleClose={ handleClose }
        />
        </>
    );
}

export default NavBar;