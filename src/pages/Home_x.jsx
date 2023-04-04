import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { getNewsThunk } from '../store/slices/news.slice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const news = useSelector(state => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsThunk())
  }, [])

  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3} className="py-3">
          {
            news.map(item => (
              <Col className="mb-3" key={item.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.headline}</Card.Title>
                    <Card.Text>
                      {item.lead}
                    </Card.Text>
                    <Button
                      variant="primary"
                      as={ Link }
                      to={`/producto/${item.id}`}
                    >
                      Ver detalle
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
}
export default Home;