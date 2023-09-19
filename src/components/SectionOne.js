import React from 'react'
import {fatchApi} from '../Handel/api'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Header/header.css"
import { FetchApi } from '../API/FetchApi';
import { useNavigate } from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SectionOne = () => {
const[Movies,setMovies]=useState([]);
const[TrendingType,setTrendingType]=useState("day");
const nav=useNavigate();
useEffect(()=>{

  FetchApi(`trending/all/${TrendingType}?language=en-US`)
  .then(response => setMovies(response.results))
  .catch(err => console.error(err));

},[TrendingType])

const HandelCall=(movie)=>{
nav(`/${movie.media_type}/${movie.id}`);

}

  return (
    <div className='w-[80%] mx-auto'>
        <div className='w-full  h-[15vh] flex justify-between items-center relative'>
            <h2 className='font-sans text-2xl font-thin'>Trending</h2>
            <div class="toggle-button-cover">
        <div id="button-3" class="button r">
          <input class="checkbox" type="checkbox" onChange={()=>{
          TrendingType==="day"?setTrendingType("week"):setTrendingType("day")
        }} />
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
      </div>
          
        </div>
<div className='h-[55vh] sm:h-[25vh] w-full'>
<Swiper
  slidesPerView={5}
  spaceBetween={25}
  modules={[Pagination]}
  className="mySwiper h-full"
  
>
  {Movies?.map((movie)=>(
<div key={movie.id}>
<SwiperSlide className='w-1/5 sm:w[10vh]  h-full relative' onClick={()=>{
  HandelCall(movie)
}}>
<img src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="img" className='FILTER w-full h-[80%] rounded-lg'/>
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
<h1 className='font-thin text-sm font-sans mt-4'>{movie.title?movie.title:movie.name}</h1>
<h6 className='font-thin text-[10px] font-sans mt-2'>{movie.release_date}</h6>
</div>
  </SwiperSlide> 
</div>
 
  


  ))}
</Swiper>
    
</div>

    </div>
  )
}

export default SectionOne