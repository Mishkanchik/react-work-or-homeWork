import React from "react";
import { Routes, Route } from "react-router";
import SongPage from "../Components/MainMusic/Music.jsx"
import HeaderComponent from "../Components/HeadersComponent/headers.jsx"

const RoutersComponents = () => {
    return (
      <>
        
        <HeaderComponent />
        <Routes>
        <Route path="music" element={<SongPage />} />
        </Routes>

     
      </>
    );
  };

  export default RoutersComponents;
  