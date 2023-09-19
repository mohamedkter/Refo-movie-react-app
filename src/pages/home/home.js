import React from 'react'
import Searchsection from './searchsection/searchsection'
import SectionOne from "../../components/SectionOne"
import SectionTwo from '../../components/SectionTwo'
import SectionTree from '../../components/SectionTree'
import SectionFour from '../../components/SectionFour'
const Home = () => {

  return (
    <div>
        <Searchsection/>
        <SectionOne/>
        <SectionTwo/>
        <SectionTree/>
        <SectionFour/>
    </div>
  )
}

export default Home