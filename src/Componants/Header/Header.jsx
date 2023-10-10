import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>
        <Navbar className="bg-dark rounded">
        <Container>
          <Navbar.Brand href="/" className='text-light'>
            <img
              alt=""
              src="https://cdn2.vectorstock.com/i/1000x1000/78/26/restaurant-logo-design-vector-10067826.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top logo"
            />{' '}
            Resto Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header