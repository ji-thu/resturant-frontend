import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'

function Footer() {
  return (
    <div>
        <Navbar className="bg-dark shadow">
        <Container>
          <Navbar.Brand href="#home" className='text-light rounded'>
            <p>All Right are Reserved Under Resto Cafe &copy; restocafe</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer