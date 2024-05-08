import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './style.css'
const App = () => {
  const [city,setCity]=useState('')
  console.log(city)
  const handleCity=(e)=>{
   setCity(e)
  }
  return (

    
    <div id='id1'>
      <Header onValue={handleCity}/>
      <Main city={city}/>
      <Footer/>
    </div>
  )
}

export default App
