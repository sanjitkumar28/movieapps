import React from 'react';
import MovieHeader from './Components/movieHeader';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FavuoriteMovie from './Components/FavuoriteMovie';
import MovieDetail from './Components/MovieDetail';
function App() {
  return (
    // <h1>hello</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieHeader/>} />
      {/* <Route path='/register' element={<Register/>}/>
      <Route path="/task" element={<Tasklist/>} /> */}
      <Route path='/favourite' element={<FavuoriteMovie/>}/>
      <Route path='/details' element={<MovieDetail/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
