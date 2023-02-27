import React from 'react'
import { Cart, FlexContent, Footer, Home, Menu, Navbar } from './components';
import Favourite from './components/Favourite';
import Stories from './components/Stories';
import {homeapi,popularsales,topratesales,fooditems,othergrocery, story, footerAPI} from './data/data';

const App = () => {
  return (
    <>
     <Navbar/>
     <Favourite/>
     <Cart/>
     <main className='flex flex-col gap-16 relative'>
      <Home homeapi={homeapi}/>
      <FlexContent endpoint={fooditems} ifExists/>
      <Menu endpoint={popularsales} ifExists/>
      <FlexContent endpoint={othergrocery}/>
      <Menu endpoint={topratesales}/>
      <Stories story={story}/>
     </main>
     <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App
