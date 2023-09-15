import "./App.css";
import Header from "./components/Header/Header";
import React, { useEffect, useState } from "react";
import NewMusicForm from "./components/NewMusicForm/NewMusicForm";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";
import searchbar from "./components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);
  const [activeIndex, setactiveIndex] = useState(-1);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7030/api/Song");
      // console.log(response);
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetchSongs request:", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />

      <NewMusicForm onNewSong={fetchSongs} />
      <MusicTable music={songs} />
      {/* <SearchBar /> */}
    </div>
  );
}

export default App;
