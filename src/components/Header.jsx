import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  const wishlist = useSelector((state)=> state.wishlistReducer) //state represents store
  console.log(wishlist);

  const cart = useSelector((state)=>state.cartReducer)
  console.log(cart);
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
    <Container>
      <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none', color:'white'}}> <i class="fa-solid fa-cart-shopping fa-bounce me-3"></i> E-CART</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded border-secondary ms-4 mt-2'><Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}> <i class="fa-solid fa-heart me-2" style={{color: '#f81240'}}></i>WishList <Badge bg="secondary" className='rounded ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded border-secondary ms-4 mt-2'><Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>  <i class="fa-solid fa-cart-shopping me-2" style={{color: 'yellow'}}></i>Cart <Badge bg="secondary" className='rounded ms-2'>{cart.length}</Badge></Link></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header