import React from 'react'
export default function InputForm() {

  return (
    <div className='inputForm'>
      <form>
        <h1 >Add new resturant</h1>
        <input 
        type='text'
        placeholder='name'/><br/>
          <input 
        type='text'
        placeholder='location'/><br/>
          <input 
        type='text'
        placeholder='rate'/><br/>
        <input className='btn' type='submit' />
      </form>
    </div>
  )
}
