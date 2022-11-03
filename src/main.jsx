import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

/* PAGES */
import Home from "./pages/Home";
import Search from "./pages/Search";
import Game from "./pages/Game";
import Plataform from "./pages/Plataform";
import Genre from "./pages/Genre";
import Tags from "./pages/Tags";
import Developer from "./pages/Developer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="game/:id" element={<Game />} />
            <Route path="platform/:id" element={<Plataform />} />
            <Route path="genre/:id" element={<Genre />} />
            <Route path="tag/:id" element={<Tags />} />
            <Route path="developer/:id" element={<Developer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
