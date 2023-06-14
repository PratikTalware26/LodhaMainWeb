import React, {useState, createContext } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Components/Form.css"
import "@fortawesome/fontawesome-free/css/all.css";

import AllPagesComponent from './Components/AllPagesComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PalavaBlog from './Components/PalavaBlog';
import BellavitaBlog from './Components/BellavitaBlog';
import LodhaBelmondo from './Components/LodhaBelmondo';
import GiardinoBlog from './Components/GiardinoBlog';
import BuildersBlog from './Components/BuildersBlog';
import PanacheBlog from './Components/PanacheBlog';
import Thanks from './Components/Thanks';
import PrivacyPolicy from './Components/PrivacyPolicy';

export const ThanksContext= createContext()

function App() {
  const [thanksState, setThanksState]= useState(false)

  return (
    <>
    <BrowserRouter>
    <ThanksContext.Provider value={{thanksState, setThanksState}}>
      <Routes>
        <Route path='/' element={<AllPagesComponent/>}/>
        <Route path='/lodha_palava' element={<PalavaBlog/>}/>
        <Route path='/lodha_bella_vita' element={<BellavitaBlog/>}/>
        <Route path='/lodha_belmondo' element={<LodhaBelmondo/>}/>
        <Route path='/lodha_giardino' element={<GiardinoBlog/>}/>
        <Route path='/lodha_builders' element={<BuildersBlog/>}/>
        <Route path='/lodha_panache' element={<PanacheBlog/>}/>
        <Route path='/thanks' element={<Thanks/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
      </Routes>
      </ThanksContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
