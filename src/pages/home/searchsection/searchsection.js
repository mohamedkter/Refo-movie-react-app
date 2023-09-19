import React, { useEffect, useState } from 'react'
import Fatchapi from '../../../Handel/fatchapi'
import { useSelector } from 'react-redux';
import { NavLink ,useNavigate } from 'react-router-dom';
import './searchsection.css';
const Searchsection = () => {
  const navigat=useNavigate()
  const data =Fatchapi('/movie/upcoming');
  const[background,setbackground]=useState("");
  const[quire,setquire]=useState("");
  const url=useSelector((state)=>state.url)
  useEffect(()=>{
    const ground="http://image.tmdb.org/t/p/original"+data?.results?.[Math.floor( Math.random()*20)].backdrop_path;
    setbackground(ground);
    console.log(ground);
  },[data])
  return (
    <div className='searchsection ' >
      <img src={background} className='back' alt='background'/>
      <div className="wrap contaner">
      <div className="welcomesection sm:hidden">
    <h1>Welcome.</h1>
    <p>Discover a world of movies on our website - explore now!</p>
</div>
<div className="inputsection sm:w-[50vh]">
    <input type="text" className='sm:w-[90%] '  onChange={(e)=>{
setquire(e.target.value)
    }} />
    <button className='sm:text-xs' onClick={()=>{navigat(`/search/movie/${quire}`)}}>Search</button>
</div>
      </div>


    </div> 
  )
}

export default Searchsection