import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

function Home() {
const data = useFetch('https://dummyjson.com/products')
console.log(data);

const dispatch = useDispatch()

  return (
  <Row className='ms-5 me-3' style={{marginTop:'150px'}}>
     {data?.length>0?
     data?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
     <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{item.title.slice(0,20)}..</Card.Title>
        <Card.Text>
         <p>{item.description.slice(0,40)}...</p>
         <p className='fw-bolder'>Price: ₹ {item.price}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
         <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger btn rounded"><i class="fa-solid fa-heart"></i></Button>
        <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus"></i></Button> 
        </div>
        </Card.Body>
    </Card>
     </Col>))
      :<p>Nothing to display</p>
     }
  </Row>
  )
}

export default Home