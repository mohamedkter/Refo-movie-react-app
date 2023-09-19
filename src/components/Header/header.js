import React, { useState } from 'react';
import './header.css';
import logo from './logo.png';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import close from "../../assert/icon-close.svg";
import open from "../../assert/icon-hamburger.svg" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink ,useNavigate } from 'react-router-dom';
const Header = () => {
  const[meun,setmeun]=useState(false);
  const[searchbox,setsearchbox]=useState(false);
  const[quire,setquire]=useState();
  const navigat=useNavigate()
  const goHome=()=>{
    navigat("/")
  }
  return (
    <div className='header'>
      <div className="contaner nav">
         <img src={logo} className='logo' alt='logo' onClick={goHome}/>
     {
      searchbox==false?
      <div className="navlist">
      <ul>
        <li className='listitem'><NavLink to={"/explore/movie"}>Movies</NavLink> </li>
        <li className='listitem'><NavLink to={"/explore/tv"} >TV Show</NavLink> </li>
        <li onClick={()=>{setmeun(false);
          setsearchbox(true);
          }}><FontAwesomeIcon icon={faSearch}/></li>
        <li className='dropdown' onClick={()=>{
          setmeun(!meun);
          setsearchbox(false);
        }}>{meun?<img src={close} alt="openicon" className='w-[15px]  hidden sm:block '/>:<img src={open} alt="openicon" className='w-[15px]  hidden sm:block'/>}</li>
      </ul>
    </div>:<></>
     }
      <div className={`w-[140vh] flex  relative mx-auto ${searchbox?"block":"hidden"}`}>
      <button onClick={()=>{setsearchbox(false)}} className='w-[10%] bg-gradient-to-r from-[#97cdb3] to-[#1b7c72] h-12 rounded-l-full flex justify-center items-center'><img src={close} alt="claseicon" className='w-[17px]  sm:block '/></button>
        <input type='text' onChange={
          (e)=>{
            setquire(e.target.value);
          }
        } className='w-[90%] h-12  outline-none text-black pl-8 font-sans text-xl font-medium'/>
        <button onClick={()=>{navigat(`/search/movie/${quire}`)}} className='w-[10%] bg-gradient-to-r from-[#97cdb3] to-[#1b7c72] h-12 rounded-r-full'><FontAwesomeIcon icon={faSearch}/></button>
      </div> 
      </div>
     {
      meun?<div className={`menu hidden sm:block`}>
      <ul>
        <li className='meunitem'><NavLink to={"/explore/movie"}>Movies</NavLink> </li>
        <li className='meunitem'><NavLink to={"/explore/tv"}>TV Show</NavLink> </li>
      </ul>
    </div> :<></> 
     }
      
      
    </div>
    
  )
}

export default Header