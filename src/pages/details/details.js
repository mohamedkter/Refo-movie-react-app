import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import TopDetails from "../../components/Details/TopDetails"
import TopCast from "../../components/Details/Topcast"
import Video from '../../components/Details/Video';
import { FetchApi } from '../../API/FetchApi';
import SmailerMovies from '../../components/Details/SmailerMovies'; 
const Details = () => {
const {madiType,id}=useParams();
const[MovieData,setMovieData]=useState([]);
const[Cast,setCast]=useState([]);

useEffect(()=>{
 
      FetchApi(`${madiType}/${id}?language=en-US`)
      .then(response => setMovieData(response))
      .catch(err => console.error(err));

      FetchApi(`${madiType}/${id}/credits?language=en-US`)
      .then(response => setCast(response))
      .catch(err => console.error(err));
    
},[id, madiType])
  return (
    <div >
         <div className='w-full  text-black relative h-[35vh] '>
<img src={`http://image.tmdb.org/t/p/original${MovieData.backdrop_path}`} alt="img" className=' w-full h-[80vh] absolute '/>
<div className=' h-[80vh] w-full bg-[#041226] opacity-90 z-20 absolute'>
</div>
<div className='w-[75%] sm:w-full sm:left-0 left-[22vh] top-20  z-40 absolute'>
    <TopDetails MovieData={MovieData} MovieCast={Cast}/>
</div>
    </div>

    <div className='w-[75%]   mx-auto   h-[250vh] z-50  pt-[50vh]'>
  <TopCast MovieCast={Cast.cast}/>
{
  madiType==="movie"?
  <Video MovieData={MovieData} />:""

}  <SmailerMovies madiType={madiType} MovieData={MovieData}/>
</div>
    </div>
 
  )
}

export default Details