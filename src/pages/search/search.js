import React from 'react'
import { useState ,useEffect } from 'react';
import SearchBody from '../../components/Search/searchBody'
import "../../components/load.css"
import { useParams } from 'react-router-dom';
import { FetchApi } from '../../API/FetchApi';

const Search = () => {
const {quire}=useParams();
  const[Movies,setMovies]=useState([]);
  const[load,setload]=useState(true);
  setTimeout(()=>{
     
    console.log(Movies);
    setload(false);
  },5000)
  useEffect(()=>{  
    FetchApi(`search/movie?query=${quire}&include_adult=false&language=en-US&page=1`)
    .then(response => setMovies(response.results))
    .catch(err => console.error(err));
 
  },[quire])
 
  return (
    <div className='w-[80%]  mx-auto'>
       <div className='w-full h-[30vh]   flex items-center'>
<div className='flex w-full h-[15vh]  '>
    <h2 className='font-sans text-3xl font-extralight mt-20'>Search for  {quire}</h2>
   
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
 :Movies?<SearchBody Movies={Movies} quire={quire} className="h-[150vh]"/>:<h1 className='w-full font-sans text-5xl bg-white'>Not found</h1>
}
    </div>
  )
}

export default Search