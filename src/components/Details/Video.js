import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./Top.css"
import { FetchApi } from '../../API/FetchApi';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from 'react-player';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
const Video = (props) => {
    const[video,setVideo]=useState([]);
    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
    useEffect(()=>{
        
    FetchApi(`movie/${props.MovieData.id}/videos?language=en-US&page=1`)
          .then(response => setVideo(response))
          .catch(err => console.error(err));
    
    
      },[props.MovieData.id, props.madiType, video])
  return (
    <div>
          <h2 className='font-sans text-2xl font-thin mb-10 mt-24 '>Officel Videos</h2>

<div className='h-full sm:h-[25vh] w-full mt-100vh'>
<Swiper
slidesPerView={2}
spaceBetween={25}
modules={[Pagination]}
className="mySwiper h-full"
>
{video.results?.map((videos)=>(
<div key={videos.id}>
<SwiperSlide className='w-1/5 sm:w[10vh]  h-full relative flex-col '>

<ReactPlayer url={`https://youtu.be/${videos.key}`} light={true}  />
<div className= ' h-[20%] flex-col text-center'>
<h1 className='font-thin text-sm font-sans mt-4'>{videos.name}</h1>
</div>
</SwiperSlide> 
</div>

))}
</Swiper>

</div>

    </div>
  )
}

export default Video