import React, { useState } from 'react'
import Data from './Data'
import RestCard from './RestCard'
import InputForm from './InputForm'
export default function RestList() {
const [restList ,setRestList] = useState(Data)
const AddRest = (name ,location,rate) =>{
   const newId = restList.length + 1
   const newRestList = [...restList,{id:newId , name:name ,location:location , rate:rate}]
   setRestList(newRestList)
   console.log(restList)
}

const upDate = (index , newRate)=>{
const newRestList = [...RestList]
newRestList[index].rate = newRate;
setRestList(newRestList)
}
  return (
    <div className='main'>
        <div>
        <div>
        <InputForm handelAdd = {AddRest}/>
      </div>
        </div>
        <div className='mainCard'>
      {
        restList.map((e,index)=>(<RestCard data={e} onUpdate={(newRate)=>upDate(index,newRate)}/>))
      }
    </div>
    </div>
    
  )
}
