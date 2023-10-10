import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../Restop/Restop';

function Viewrest() {
    //get path parameter

    // const pathparameter=useParams()
    // console.log(pathparameter.id);

    // destructure

    const {id}=useParams()
    console.log(id);
    const [restdetails,setrestdetails]=useState({})

    // api call for particular details

    const fetchdata= async()=>{
        const response = await axios.get(`http://localhost:3002/restaurants/${id}`)
        console.log(response.data);
        setrestdetails(response.data)
    }

    useEffect(()=>{
        fetchdata();
    },[])

  return (
    <div>
        <Row>
            <Col>
            {/* image */}
            <img src={restdetails.photograph} alt="" style={{width:'300px', height:'400px',margin:'50px',borderRadius:'30px'}}/>
            </Col>
            <Col style={{margin:'50px'}}>
            <ListGroup>
               <ListGroup.Item>Name: {restdetails.name}</ListGroup.Item>
               <ListGroup.Item>Address : {restdetails.address}</ListGroup.Item>
               <ListGroup.Item>neighborhood:  {restdetails.neighborhood}</ListGroup.Item>
               <ListGroup.Item><Restop op={restdetails.operating_hours}/></ListGroup.Item>
               
            </ListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default Viewrest