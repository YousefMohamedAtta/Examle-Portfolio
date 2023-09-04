import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
//componets
import Home from "./Home";
import NavBarrr from "./NavBarrr";
import  "./App.css"
import Projects from "./Projects";
import Cursor from './Cursor';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const App = () => {
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      <Cursor />
      {loading ? (
        <div className="preloaderr">
          <ScaleLoader
            color={"#f87765"}
            height={100}
            loading={loading}
            margin={10}
          />
        </div>
      ) : (
        <>
          <NavBarrr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="NavBarr" element={<NavBarrr />} />
            <Route path='/Projects' element={<Projects/>}/>
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
