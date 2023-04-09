import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk, filterCategoriesThunk, filterTitleThunk } from '../store/slices/products.slice';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const [categories, setCategories] = useState([])
  const [inputSearch, setInputSearch] = useState("")
  const [isFromTo, setIsFromTo] = useState(false)
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
                onClick={() => dispatch(filterCategoriesThunk(category.id))}>
                {category.name}
              </Button>
            </Col>
          ))
          }
          <Col>
            <Button
              className='w-100'
              onClick={() => dispatch(getProductsThunk())}
            >
              All
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Busca Productos por nombre"
                aria-label="News's name"
                aria-describedby="basic-addon2"
                value={inputSearch}
                onChange={e => setInputSearch(e.target.value)}
              />
              <Button
                variant="outline-primary"
                onClick={() => dispatch(filterTitleThunk(inputSearch))}
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <div className='pri'>
          <div className='price_btns'>
            <Button
              className='btn_price'
              onClick={() => setIsFromTo(!isFromTo)}
            >
              <div className='btn_price'>
                <div className='txt'>
                  <strong>Price</strong>
                </div>
                <div className='bx'>
                  {!isFromTo && <i className='bx bx-right-arrow-alt bx-sm'></i>}
                  {isFromTo && <i className='bx bx-left-arrow-alt bx-sm'></i>}
                </div>
              </div>
            </Button>
            {isFromTo &&
              <div className='input_from'>
                <label htmlFor="">From: </label>
                <input type="text" />
                <label htmlFor="">To: </label>
                <input type="text" />
                <br />
                <Button>Filter</Button>
              </div>
            }
          </div>
        </div>
        <Row xs={1} md={2} lg={3} className='py-3'>
          {products.map(product => (
            <Col className='mb-3' key={product.id}>
              <Card >
                <Card.Img
                  variant="top"
                  src={product.images[0].url}
                  style={{ height: 200 }} // , objectFit: "cover"
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Button
                    as={Link}
                    to={`/product/${product.id}`}
                    variant="primary">Ver detalle</Button>
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