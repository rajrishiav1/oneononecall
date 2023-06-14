import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const[value,setValue] =useState()
   // console.log("value",value);
   const navigate = useNavigate();
   const handleClick = ()=>{
    navigate(`room/${value}`)
   }
  return (
    <div className='text-center'>
       <input type="text " placeholder='Enter room id' name='' id='' onChange={(e)=>setValue(e.target.value)} />
      <button onClick={handleClick}>Join</button>
    </div>
  )
}

export default Home
