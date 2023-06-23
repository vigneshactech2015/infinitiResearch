import React from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/Navbar/NavBar';
import Hero from '../components/Hero/Hero';
import Explore from '../components/Explore/Explore';

import Eclipse from '../components/Hero/Eclipse';

function Home() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Hero/>
      <Eclipse/>
      
      <Explore/>
    </div>
  )
}

export default Home