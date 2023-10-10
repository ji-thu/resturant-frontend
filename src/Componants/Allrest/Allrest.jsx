import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Allrest() {

  const [data,setdata]=useState([])
  const fetchdata=async()=>{

   const response=await axios.get('http://localhost:3002/restaurants')
   setdata(response.data);
   
   

  }

  console.log(data);
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div>
      <Row>
      {
        data.map((item)=>(
         <Col sm={12} md={6} lg={4} xl={3}>
         <Card resturants={item}/>
         </Col>
        ))
      }
      </Row>
    </div>
  )
}

export default Allrest