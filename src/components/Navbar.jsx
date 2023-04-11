
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'

const NavBar = () => {
    const [ show, setShow ] = useState(false)
    const handleClose = () => {
        setShow(false)
    }
    
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/">New App</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/purchase">Purchase</Nav.Link>
                <Nav.Link 
                onClick={ () => setShow(true) }
                >Purchase (sidebar)</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <Sidebar
        show={ show }
        handleClose={ handleClose }
        />
        </>
    );
}

export default NavBar;
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand as={Link} to="/" >So cheap app</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link as={Link} to="/login" >Login</Nav.Link>
//           <Nav.Link as={Link} to="/purchase" >Purchase</Nav.Link>
//           <Nav.Link >Pricing (sidebar)</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBar;