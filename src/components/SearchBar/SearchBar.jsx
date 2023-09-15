import React, { useState } from "react";
import initData from "../Data/Data";

const searchbar = () => {};
const [searchInput, setSearchInput] = useState("");

const Music = initData;
const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};
if (searchInput.length > 0) {
  Song.filter((music) => {
    return song.name.match(searchInput);
  });
}
{
  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>album</th>
            <th>artist</th>
            <th>genre</th>
            <th>releasedate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td>{val.song}</td>
              <td>{val.album}</td>
              <td>{val.artist}</td>
              <td>{val.genre}</td>
              <td>{val.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default searchbar;
