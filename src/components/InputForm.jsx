import React, { useState } from 'react'
export default function InputForm({handelAdd}) {
const [name , setName] = useState('')
const [location , setLocation] = useState('')
const [rate ,setRate] = useState(0)
   const handelSubmit = (e) =>{
    e.preventDefault();
    handelAdd(name , location , rate)
     setName('')
     setLocation('')
     setRate(0)

   }
  return (
    <div className='inputForm'>
      <form onSubmit={handelSubmit}>
        <h1 >Add new resturant</h1>
        <input 
        type='text'
        placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/><br/>
          <input 
        type='text'
        placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} /><br/>
          <input 
        type='text'
        placeholder='rate'value={rate} onChange={(e) => setRate(e.target.value)} /><br/>
        <input className='btn' type='submit' />
      </form>
    </div>
  )
}
