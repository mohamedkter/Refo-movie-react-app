import React from 'react'
import { useState ,useEffect } from 'react';
import ExploreBody from '../../components/explore/exploreBody'
import { useParams } from 'react-router-dom';
import "../../components/load.css"
import { FetchApi } from '../../API/FetchApi';

const Explore = () => {
const {madiType}=useParams();

  const[Movies,setMovies]=useState([]);
  const[load,setload]=useState(true);
  useEffect(()=>{


  setTimeout(()=>{     
    
    setload(false);
  },5000)
    
  FetchApi(`discover/${madiType}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`)
    .then(response => setMovies(response.results))
    .catch(err => console.error(err));
  },[Movies, madiType])
  
  return (
    <div className='w-[80%]  mx-auto'>
       <div className='w-full h-[30vh]   flex items-center'>
<div className='flex w-full h-[15vh] justify-between items-center '>
    <h2 className='font-sans text-3xl sm:text-base font-extralight'>Explore {madiType==="movie"? "Movies" :"TV Show" }</h2>

</div>
    </div>
    {
  load?
  <div className='h-[80vh] flex justify-center items-center'>
     <div class="loader">
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__bar"></div>
  <div className="loader__ball"></div>
</div>
  </div>
 :Movies?<ExploreBody Movies={Movies} madiType={madiType}/>:<h1 className='w-full font-sans text-5xl bg-white'>Not found</h1>
}

    </div>
  )
}

export default Explore