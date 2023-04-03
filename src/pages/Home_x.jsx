import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk, filterCategoriesThunk } from '../store/slices/products.slice';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    dispatch(getProductsThunk())

    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories")
      .then(resp => setCategories(resp.data))
      .catch(error => console.error(error))

  }, [])

  return (
    <div>
      <Container>
        <Row className='py-3'>
          {categories.map(category => (
            <Col key={category.id}>
              <Button
                className='w-100'
                onClick={dispatch(() => filterCategoriesThunk(category.id))}>
                {category.name}
              </Button>
            </Col>
          ))
          }
        </Row>
        <Row xs={1} md={2} lg={3} className='py-3'>
          {products.map(product => (
            <Col className='mb-3' key={product.id}>
              <Card >
                <Card.Img
                  variant="top"
                  src={product.images[0].url}
                  style={{ height: 200, objectFit: "cover" }}
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