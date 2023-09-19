import './App.css';
import { useDispatch } from 'react-redux';
import * as actions from './redux/actions.js'
import { fatchApi } from './Handel/api';
import { useEffect } from 'react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Home from './pages/home/home';
import Explore from './pages/explore/explore';
import Notfound from './pages/notfound/notfound';
import Detalis from './pages/details/details';
import Search from './pages/search/search';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    fatchconfiguration()
  },[])
  const fatchconfiguration=()=>{
    fatchApi('/configuration?api_key=c35c0d34875324b8eeea064d1bae5ff9').then((res)=>{
      console.log(res);
      dispatch({type:actions.CONFIGRATION,
      payload:res});
    })
  }
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/search/:madiType/:quire' element={<Search/>}></Route>
    <Route path='/explore/:madiType' element={<Explore/>}></Route>
    <Route path='/:madiType/:id' element={<Detalis/>}></Route>
    <Route path='*' element={<Notfound/>}></Route>
   </Routes>

   <Footer/>
   </BrowserRouter>
  );
}

export default App;
