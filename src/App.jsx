import "./App.css";
import Header from "./components/Header/Header";
import React, { useState } from "react";
import NewMusicForm from "./components/NewMusicForm/NewMusicForm";
// import Searchbar from "./components/SearchBar/SearchBar";
import MusicTable from "./components/MusicTable/MusicTable";

function App() {
  return (
    <div className="App">
      <Header />
      <NewMusicForm />
      <MusicTable />
      {/* <Searchbar /> */}
    </div>
  );
}

export default App;
