import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
export default function RestCard(props) {
  return (
    <div className='mainContainer'>
      <div className='card'>
       <Link href={`/restdetails/${props.id}`}> <img className='img' alt='fried chicken' src='https://img.freepik.com/free-photo/high-angle-fried-chicken-fries-with-ketchup_23-2148682821.jpg?w=740&t=st=1716747925~exp=1716748525~hmac=0b10db080d0a6a60b248970be1bebdb46119292168991492b7d4c5a7352918ab'/>
        <h3 className='name'>Name:{props.name}</h3>
        <h4 className='location'>Location:{props.location}</h4>
        <h6 className='rate'>Rate:{props.rate}</h6>
        </Link>
      </div>
    </div>
  )
}
