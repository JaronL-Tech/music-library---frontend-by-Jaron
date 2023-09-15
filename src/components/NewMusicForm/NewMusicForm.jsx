import React, { useState } from "react";
import "./NewMusicForm.css";
import axios from "axios";

const NewMusicForm = ({ onNewSong }) => {
  const [submitting, setSubmitting] = useState(false);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [releasedate, setReleaseDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = {
      title,
      artist,
      album,
      genre,
      releasedate,
    };
    try {
      const response = await axios.post(
        "https://localhost:7030/api/Song",
        formData
      );
    } catch (error) {
      console.warn("Error submitting new Title form", error);
      if (response.status === 201) {
        onNewSong();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-item">
      <h4>Add Song</h4>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => settitle(e.target.value)} />
      </div>
      <div>
        <label>Artist</label>
        <input value={artist} onChange={(e) => setArtist(e.target.value)} />
      </div>
      <div>
        <label>Album</label>
        <input value={album} onChange={(e) => setAlbum(e.target.value)} />
      </div>
      <div>
        <label>Genre</label>
        <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      </div>
      <div>
        <label>releasedate</label>
        <input
          value={releasedate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Song</button>
    </form>
  );
};

export default NewMusicForm;
