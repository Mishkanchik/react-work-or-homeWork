import React from "react";
import { Routes, Route } from "react-router";

import HeaderComponent from "../Components/HeadersComponent/headers.jsx"
import SongPage from "../Pages/MainMusicPages/MusicPages.jsx";
import RecipePages from "../Pages/MainRecipePages/RecipePages.jsx";
import BibliographyOfShakespearePage from "../Pages/MainBibliography-of-ShakespearePage/MainBibliography-of-ShakespearePage.jsx";
import FavoriteMoviePages from "../Pages/MainFavoriteMoviePages/MainFavoriteMoviePages.jsx";
import { Box } from "@mui/material";

const RoutersComponents = () => {
    return (
      <>
        
        <HeaderComponent />
        
          <Routes>
            <Route path="/" element={<Box sx={{ backgroundColor: "#121212", color: "#fff", p: 3, width: "100vw", minHeight: "100vh" }}></Box>}/>
          </Routes>
        <Routes > 

          <Route path="/music" element={<SongPage/>} />
          <Route path="/recipe" element={<RecipePages/>} />
          <Route path="/bibliography" element={<BibliographyOfShakespearePage/>} />
          <Route path="/favorite-movie" element={<FavoriteMoviePages/>} />

        </Routes>

     
      </>
    );
  };

  export default RoutersComponents;
  