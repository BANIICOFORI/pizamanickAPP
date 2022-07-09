import React from 'react';
import Contact from './Contact';
import  './App.css';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Pizatypes from './Pizatypes';
import Menu from './Menu';
import Booktable from './Booktable';
import Slider from './Slider';

function App() {
  return (
   
    <>
   <main id="main">
   <Header/>
   <Slider />
    <About/>
   <Pizatypes />
   <Menu />
   <Booktable />
   <Contact/>
   </main>
   <Footer/> 
    </>     
  );
}

export default App;
