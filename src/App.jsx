
import { Suspense, useEffect, useState } from 'react';
import './App.css'
import Nav from './components/Navbar/Nav'
import Foods from './components/Foods/Foods'

function App() {
 const [data,setData]=useState([]);
 useEffect(()=>{
 fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res=>res.json())
 .then(data=>setData(data))
 },[])
 
  
  return (
    <>
  <Nav/>
  
  <div className='container mx-auto'>
    <h1 className='text-center font-bold text-2xl text-gray-500 mt-10'>Order Foods You Love</h1>
    {data && <Foods data={data}/>}
  </div>
    </>
  )
}

export default App
