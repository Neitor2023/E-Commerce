import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductsThunk } from '../store/slices/products.slice';

const Home = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getProductsThunk())
  }, [])

  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3} className='py-3'>
          {products.map(product => (
            <Col className='mb-3' key={product.id}>
              <Card >
                <Card.Img 
                variant="top" 
                src={product.images[0].url}
                style={{height:200, objectFit:"cover"}}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Button variant="primary">Ver detalle</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default Home;