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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="game/:id" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
