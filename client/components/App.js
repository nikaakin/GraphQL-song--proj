import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SongCreate from "./SongCreate";
import SongDetail from "./SongDetail";
import { Songlist } from "./Songlist";

export default (props) => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Songlist />}></Route>
          <Route path="/songs/new" element={<SongCreate />}></Route>
          <Route path="/songs/:id" element={<SongDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
