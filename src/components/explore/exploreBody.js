import React from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
const ExploreBody = (props) => {
    const navigat=useNavigate()
    const HandelCall=(movie)=>{
        navigat(`/${props.madiType}/${movie.id}`);
          console.log(`/${movie.media_type}/${movie.id}`)
        }
  return (
    <div className='w-full'>
        <div className='w-full  grid sm:grid-cols-3 sm:gap-14 gap-4 grid-flow-row grid-cols-5' >
        {props.Movies?.map((movie)=>(
<div key={movie.id}>
<div className='w-full sm:w-[20Vh] sm:h-[20vh]   h-[45vh] relative' onClick={()=>{
  HandelCall(movie)
}}>
<img src={`http://image.tmdb.org/t/p/original${movie.backdrop_path?movie.backdrop_path:movie.poster_path}`} alt="img" className='FILTER w-full h-[80%] rounded-lg mb-[3vh]'/>
<div className='w-full h-[20%] absolute top-[63%]   p-2 sm:w-[6vh] sm:h-[6vh]'>
<div className='w-[8vh]  h-[8vh] border-4 absolute sm:w-[6vh] sm:h-[6vh] bottom-0 bg-white rounded-[50%] flex justify-center items-center'>
<CircularProgressbar
        value={movie.vote_average*10}
        
        text={`${movie.vote_average}`}
        styles={buildStyles({
          // This is in units relative to the 100x100px
          // SVG viewbox.
          pathColor: `${movie.vote_average>8?"#3cb371":movie.vote_average>6?"#ffa500":"#f00"} `,
          textSize: "30px"
        })}
      />
</div>
<div className='w-2/3 ml-[10vh]  '>

</div>
</div>
<div className= ' h-[20%] flex-col'>
<h1 className='font-thin text-sm font-sans mt-4 sm:text-xs'>{movie.title?movie.title:movie.name}</h1>
<h6 className='font-thin text-[10px] font-sans mt-2'>{movie.release_date}</h6>
</div>
  </div> 
</div>
 
  


  ))}

        </div>
    </div>
  )
}

export default ExploreBody