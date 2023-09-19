import React, { useEffect } from 'react'
import "./Top.css"
import ReactPlayer from 'react-player';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
const TopDetails = (props) => {
 
  const [open, setOpen] = React.useState(false);
  const date=(dateString)=>{
    const date = new Date(dateString);
    // Get day, month, and year
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return {month,day,year}
  }
    // Calculate hours and minutes
  const formatTime=(numString)=> {
    const num = parseInt(numString);
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    const formattedTime = `${hours}h ${minutes}m`;
    
    return formattedTime;
  }
  const {month,day,year}=date(props.MovieData.release_date);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  
  
  return (
    <div className='flex justify-between sm:flex-col relative font-sans'>
<img src={`http://image.tmdb.org/t/p/original${props.MovieData.poster_path}`} alt="img" className=' w-1/4 sm:w-20vh sm:h-[40vh]  rounded-xl h-[65vh] absolute '/>
        <div className='w-1/4 sm:w-[70%] sm:h-[40vh] h-[55vh]  sm:ml-[25vh] ml-[45vh]'>
            <h2 className='text-white font-normal text-2xl font-sans'>{props.MovieData.title}</h2>
            <h4 className='text-slate-500  font-normal'>Unmask the truth</h4>
<div className='w-[35vh] flex justify-between  h-[4vh] mt-3' >

            {props.MovieData.genres?.map((genre)=>

    <div key={genre.id}>
<h6 className=' mt-1 p-1 h-[3vh] bg-red-950 justify-center rounded font-sans font-light text-white flex items-center'>{genre.name}</h6>
    </div>
)}
</div>
<div className='mt-10 flex justify-between  h-[10vh] w-[65vh] items-center'>
<div className='w-[11vh]  h-[11vh] border-4  sm:w-[6vh] sm:h-[6vh] bottom-0 bg-[#041226] rounded-[50%] flex justify-center items-center text-white'>
<CircularProgressbar
        value={props.MovieData.vote_average*10}
        
        text={`${props.MovieData.vote_average}`}
        styles={buildStyles({
          // This is in units relative to the 100x100px
          // SVG viewbox.
          pathColor: `${props.MovieData.vote_average>8?"#3cb371":props.MovieData.vote_average>6?"#ffa500":"#f00"} `,
          textSize: "25px",
          textColor:"#fff",
          trailColor:""

        })}
      />
</div>
<div className='flex w-80 '>
      <Button onClick={handleOpen} className='play rounded-full'><svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        
<ReactPlayer url={"https://youtu.be/MzCXmlth9UU"} controls={true} playing={open?true:false}/>
      
      
      </Backdrop>
    <h1 className='text-white font-sans font-light text-base my-auto ml-4'> Whatch Trailer</h1>
    </div>
</div>
<div className='mt-6 '>
    <h1 className='text-white text-3xl font-sans font-extralight'>Overview</h1>
    <p className='w-[50vh] text-white font-sans font-thin text-xs mt-3'>{props.MovieData.overview}</p>
</div>
<div className='mt-3 '>
<div className='w-[70vh] pr-10 border-b-[1px] border-slate-500  h-[5vh] flex justify-between items-center '  >
  <h4 className='text-white font-sans  text-sm font-light'>State : <span className=' text-xs text-slate-500'>{props.MovieData.status}</span> </h4>
  <h4 className='text-white font-sans  text-sm font-light'>Release Date : <span className=' text-xs text-slate-500'>{`${month} ${day} , ${year}`}</span> </h4>
  <h4 className='text-white font-sans  text-sm font-light'>Run Time : <span className=' text-xs text-slate-500'>{formatTime(props.MovieData.runtime)}</span> </h4>
</div>
<div className='w-[70vh] pr-10 border-b-[1px] border-slate-500  h-[5vh] flex justify-between items-center '  >
  <h4 className='text-white font-sans  text-sm font-light'>Tagline : <span className=' text-xs text-slate-500'>{props.MovieData.tagline}</span> </h4>
</div>
<div className='w-[70vh] pr-10 border-b-[1px] border-slate-500  h-[5vh] flex justify-between items-center '  >
  <h4 className='text-white font-sans  text-sm font-light'>Writer : <span className=' text-xs text-slate-500'>{props.MovieData.status}</span> </h4>

</div>
<div></div>
<div></div>
</div>

        </div>

    </div>
  )
}

export default TopDetails