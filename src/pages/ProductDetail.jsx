import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetail.css'
import { useDispatch, useSelector } from "react-redux";
import { filterCategoriesThunk } from "../store/slices/products.slice";

const ProductDetail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState({})
  const [btn_i, setBtn_i] = useState(1)
  const [swBntLeft, setSwBntLeft] = useState(true)
  const [swBntRight, setSwBntRight] = useState(true)
  const [quatity, setQuatity] = useState(1)


  // dispatch = useDispatch(state.action.filterCategoriesThunk())
  // dispatch(filterCategoriesThunk(category.id))
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    console.log("id ", typeof (Number(id)), " ", id)
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${Number(id)}`)
      .then(resp => setDetail(resp.data))
      .catch(error => console.error(error))
    dis()
  }, [id])

  const dis = () => {
    console.log("Category DB ", detail) // .categoryId)
    console.log("Category ID ", detail.categoryId) // .categoryId)    
    // console.log("Category ", detail.category?.categoryId) // .categoryId)
    dispatch(filterCategoriesThunk(detail.categoryId))
    console.log("Products ", products)
  }

  // dis()

  // const dispatch = useDispatch(filterCategoriesThunk(detail.categoryId))


  //categoryId
  // console.log("nombre ",products) 
  //?.[0].category?.name)
  return (
    <div>
      <div className="title">
        <h1>{detail.title}</h1>
        <h2>{detail.categoryId}</h2>
      </div>
      <div className="img_descri">
        <div>
          {swBntLeft &&
            <button
              className="img_btn"
              onClick={() => {
                if (btn_i > 0) {
                  setBtn_i(btn_i - 1)
                }
                if (btn_i == 1) {
                  setSwBntLeft(false)
                }
                if (!swBntRight) {
                  setSwBntRight(true)
                }
              }}
            >
              <i className='bx bxs-chevron-left-circle bx-lg'></i>
            </button>
          }
          <p>{detail[0]?.category.name}</p>
          <img className="img" src={detail.images?.[btn_i].url} />
          {swBntRight &&
            <button
              className="img_btn"
              onClick={() => {
                if (btn_i < 2) {
                  setBtn_i(btn_i + 1)
                }
                if (!swBntLeft) {
                  setSwBntLeft(true)
                }
                if (btn_i == 1) {
                  setSwBntRight(false)
                }
              }}>
              <i className='bx bxs-chevron-right-circle bx-lg'></i>
            </button>
          }
          <div className="mini_img">
            <img onClick={() => setBtn_i(0)} className="img_mini" src={detail.images?.[0].url} />
            <img onClick={() => setBtn_i(1)} className="img_mini" src={detail.images?.[1].url} />
            <img onClick={() => setBtn_i(2)} className="img_mini" src={detail.images?.[2].url} />
          </div>
        </div>
        <div className="container_column">
          <div className="descri">
            <h3>{detail.brand}</h3>
            <p>{detail.description}</p>
          </div>
          <div className="container_quatity_price">
            <div className="container_price">
              <p>Price:</p>
              <h5>$ {detail.price}</h5>
            </div>
            <div className="container_quatity">
              <p>Quantity:</p>
              <div className="quatity">
                <button onClick={() => setQuatity(quatity + 1)} className="btn_qua">
                  <h2 className="txt_qua"> + </h2>
                  {/* <i class='bx bx-message-square-add bx-sm'></i> */}
                </button>
                <h5 className="txt_qua"> {quatity} </h5>
                <button onClick={() => quatity == 0 ? quatity : setQuatity(quatity - 1)} className="btn_qua">
                  <h2 className="txt_qua"> - </h2>
                  {/* <i class='bx bx-message-square-minus bx-sm'></i> */}
                </button>
              </div>
            </div>
          </div>
          <div className="btn_add">
            <button className="btn_add">
              <h2 className="add_text">Add to Card  </h2><i className='bx bx-cart-add bx-md'></i>
            </button>
          </div>
        </div> {/* container_column */}
      </div>
      <br />

      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{products[0]?.category.id} </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}

      <Container>
        <Row xs={1} md={2} lg={3} className='py-3'>
          {products.map(product => (
            <Col className='mb-3' key={product.id}>
              <Card >
                <Card.Img
                onClick={()=>`/product/${product.id}`}
                    // as={Link}
                    // to={`/product/${product.id}`}
                
                  variant="top"
                  src={product.images[0].url}
                  style={{ height: 200 }} // , objectFit: "cover"
                />
                <Card.Body>
                  <Card.Text>
                    {product.brand}
                  </Card.Text>
                  <Card.Title>{product.title}</Card.Title>
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

export default ProductDetail;