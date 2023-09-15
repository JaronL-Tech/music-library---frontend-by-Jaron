import React, { useState } from "react";
import "./NewMusicForm.css";

const NewMusicForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
  };

  return (
    <div className="wrapper">
      <h1>Add a Song</h1>
      {submitting && <div>Submtting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
            <p>Artist</p>
            <input name="artist" />
            <p>Album</p>
            <input name="album" />
            <p>Genre</p>
            <input name="genre" />
            <p>ReleaseDate</p>
            <input name="releasedate" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewMusicForm;
