import React from 'react'
import facebook from "../../assert/icon-facebook.svg";
import instagram from "../../assert/icon-instagram.svg"
import twitter from "../../assert/icon-twitter.svg"
import pentrest from "../../assert/icon-pinterest.svg"

const footer = () => {
  return (
    <div className='w-full h-[35vh] bg-gray-950 mt-16 flex justify-center z-50'> 
    <div className=' w-1/2 h-full font-sans'>
    <ul className='flex w-[50vh] justify-between items-center mx-auto mt-16 font-sans text-sm font-light'>
      <li>Teams Of Us</li>
      <li>About</li>
      <li>Blog</li>
      <li>FQC</li>
    </ul>  
    <p className='font-sans text-[10px] font-ligh w-full mt-5 text-center'>dolor sit amet so i like football and i love to share my live  consectetur adipisicing elit. Suscipit dolorem voluptatem, reprehenderit nesciunt, quas tempore non eos alias at quisquam officia. Tenetur quas dolores aspernatur.</p>
    <ul className='flex w-[25vh] justify-between items-center mx-auto mt-5 font-sans text-sm font-light'>
      <a href='https://www.youtube.com/'><img src={facebook} alt="icon" className='w-6 hover:border-b-2 p-1'/></a>
      <i><img src={instagram} alt="icon" className='w-6 hover:border-b-2 p-1'/></i>
      <i><img src={twitter} alt="icon" className='w-6 hover:border-b-2 p-1'/></i>
      <i><img src={pentrest} alt="icon" className='w-6 hover:border-b-2 p-1'/></i>
      

    </ul>
    </div></div>
  )
}

export default footer