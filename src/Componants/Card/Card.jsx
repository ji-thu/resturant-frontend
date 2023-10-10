import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

import { Link } from 'react-router-dom';

function Cardres({resturants}) {
    console.log(resturants);
  return (
    <div>
        <Link to={`/view/${resturants.id}`} style={{textDecoration:'none'}}>
        <Card className='card'>
      <Card.Img variant="top" src={resturants.photograph} className='cardimg'/>
      <Card.Body>
        <Card.Title>{resturants.name}</Card.Title>
        
        <Card.Title>Address :{resturants.address}</Card.Title>
        <Card.Title>Naibourhood :{resturants.neighborhood}</Card.Title>
        <Card.Title>Cousin type :{resturants.cuisine_type}</Card.Title>
        {/* <Card.Title><Restop op={resturants.operating_hours}/></Card.Title> */}
      </Card.Body>
    </Card>
        </Link>
    </div>
  )
}

export default Cardres