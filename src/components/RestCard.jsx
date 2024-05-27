import React from 'react'
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
// import RestDetails from './RestDetails';
export default function RestCard({data,newRate}) {

  return (
    <div className='mainContainer'>
        <div className='card'>
      <img className='img'  alt='fried chicken' src='https://img.freepik.com/free-photo/high-angle-fried-chicken-fries-with-ketchup_23-2148682821.jpg?w=740&t=st=1716747925~exp=1716748525~hmac=0b10db080d0a6a60b248970be1bebdb46119292168991492b7d4c5a7352918ab'/>
     
    <Link to={`/restdetails/${data.id}`} state={data}>
    <h3 data-testid="rest-name">Name:{data.name}</h3>
    <h4 data-testid="rest-location">Location:{data.location}</h4></Link>
      <h6 data-testid="rest-rate">Rate:{data.rate}</h6>
      </div>
    </div>
  )
}
