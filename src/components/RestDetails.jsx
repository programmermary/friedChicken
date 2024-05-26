import React from 'react'

export default function RestDetails(props) {
  return (
    <div className='info'>
       <img className='img' alt='fried chicken' src='https://img.freepik.com/free-photo/high-angle-fried-chicken-fries-with-ketchup_23-2148682821.jpg?w=740&t=st=1716747925~exp=1716748525~hmac=0b10db080d0a6a60b248970be1bebdb46119292168991492b7d4c5a7352918ab'/>
       <h1>{props.name}</h1>
       <h1>{props.location}</h1>
    </div>
  )
}
