

import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Quiz from './components/Quiz';
import Home from './components/home';







const App2 = () => {


  return (
   
  
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />

    </Routes>

    
    </BrowserRouter>
    
   </>
   );
};

export default App2;