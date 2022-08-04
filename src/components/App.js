

import { ThemeProvider } from '@react95/core';
import GlobalStyle from './GlobalStyle';
import Taskbar from './TaskBar'
import Bio from '../pages/bio'
import Exp from '../pages/exp'
import Proj from '../pages/proj'
import '@react95/icons/icons.css';
 
import { ClippyProvider } from '@react95/clippy';
import React, { useState } from 'react'



function App(){
  const [bioOpen, toggleBio] = useState(true);
  const bioClose = () => {
    toggleBio(false);
    console.log('false')
  };

  const openBio = () => {
    toggleBio(true);
    console.log('true')
  };

  let bio;
  if(bioOpen){
    bio=<Bio closeBio={bioClose}/>
  }
  else{
    bio=<></>
  }


  return(
    <div className='bg'>
    <ThemeProvider theme={'millenium'}>
      <GlobalStyle />
    <Exp/>
    <Proj/>
      {bio}
      <Taskbar openBio={()=>bioOpen=true}/>
    </ThemeProvider>
    <ClippyProvider/>
    </div>
)};

export default App;