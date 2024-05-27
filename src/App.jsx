import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import RestList from './components/RestList';
import RestDetails from './components/RestDetails';
// import RestCard from './components/RestCard';
// import Data from './components/Data';
// import InputForm from './components/InputForm';
// import RestDetails from './components/RestDetails'
// import { useState } from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {

  // const [list , setList] = useState(Data)
  // const [name ,setName] = useState('')
  // const [location ,setLocation] = useState('')
  // const  HandelAdd =() => {
  // const newItem = {
  //   name : name ,
  //   location:location,
  // }
  // const newList = [...list , newItem]
  // setList(newItem)
  // setName('')
  // setLocation('')
  // }
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RestList/>}/>
          <Route path='/restdetails/:id' element={<RestDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  //   <BrowserRouter>
  //   <div className="App">
  //     <div className='form'>
  //     <InputForm name={name} setName={setName} location={location} setLocation={setLocation}/>
  //     </div>
  //    <div className='cards'>
  //    {
  //       Data.map(rest => (
  //         <RestCard id={rest.id} name={rest.name} location = {rest.location} rate = {rest.rate}/>
  //       ))
  //      }
  //    </div>
  
  //  <div>
  //     <Routes>
  //       <Route path='/restdetails' element={<RestDetails/>}/>
  //     </Routes>
  //   </div>
   
  //   </div>
  //   </BrowserRouter>
  );
}

export default App;
