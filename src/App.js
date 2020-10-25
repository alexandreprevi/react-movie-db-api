import React from "react";

// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Person from "./components/Person";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:movieId" element={<Movie />} />
      <Route path="/person/:personId" element={<Person />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
