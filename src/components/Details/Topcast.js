import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'

const Topcast = (props) => {
  return (
    <div>
            <h2 className='font-sans text-2xl font-thin mb-10  '>Top Cast</h2>

            <div className='h-full sm:h-[25vh] w-full mt-10vh'>
    <Swiper
      slidesPerView={5}
      spaceBetween={25}
      modules={[Pagination]}
      className="mySwiper h-full"
      
    >
      {props.MovieCast?.map((movie)=>(
    <div key={movie.id}>
    <SwiperSlide className='w-1/5 sm:w[10vh]  h-full relative flex-col '>
    <img src={`http://image.tmdb.org/t/p/original${movie.profile_path}`} alt="img" className='FILTER w-[20vh] sm:w-[10vh] sm:h-[10vh] h-[20vh] my-auto rounded-full'/>

    <div className= ' h-[20%] flex-col text-center'>
    <h1 className='font-thin text-sm font-sans mt-4'>{movie.title?movie.title:movie.name}</h1>
    <h6 className='font-thin text-[10px] font-sans mt-2 text-white'>{movie.known_for_department}</h6>
    </div>
      </SwiperSlide> 
    </div>
     
      
    
    
      ))}
    </Swiper>
        
    </div>

    </div>
    
  )

}

export default Topcast