import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils";

const PlaylistSongs = () => {
  const { playlistId } = useParams();
  const [songs, setSongs] = useState([]);

  // fetch the songs for the playlists * checkout the route i've included for the songs specifically
  useEffect(() => {
    fetch(`${BASE_URL}/playlists/${playlistId}/songs`)
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, [playlistId]);

  return (
    <div>
      <h2>Songs for Playlist {playlistId}</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistSongs;
