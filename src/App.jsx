import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageReveal from './pages/PageReveal';
import Expertise from './pages/Expertise';
import Booking from './pages/Booking';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PageReveal />} />
      <Route path='/home' element={<Home />} />
      <Route path='https://digitalplanets.github.io/19keys/expertise' element={<Expertise />} />
      <Route path='https://digitalplanets.github.io/19keys/booking' element={<Booking />} />
    </Routes>
  );
}

export default App