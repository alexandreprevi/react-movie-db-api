import React from "react";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Components
import Header from "./components/Header";
import MoviesPage from "./components/MoviesPage";
import PersonsPage from "./components/PersonsPage";
import Movie from "./components/Movie";
import Person from "./components/Person";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MoviesPage />} />
      <Route path="/person" element={<PersonsPage />} />
      <Route path="/movie/:movieId" element={<Movie />} />
      <Route path="/person/:personId" element={<Person />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
