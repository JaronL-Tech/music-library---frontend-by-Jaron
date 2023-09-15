import axios from "axios";
import "./MusicTable.css";

const MusicTable = ({ music }) => {
  return (
    <div className="MusicTable">
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
          {music.map((val, key) => (
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
};

export default MusicTable;
