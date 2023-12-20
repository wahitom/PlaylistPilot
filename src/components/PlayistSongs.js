import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import { BASE_URL } from "../utils";

const PlaylistSongs = () => {
  const { playlistId } = useParams();
  const [songs, setSongs] = useState([]);

  // fetch the songs for the playlists
  // here i added a new route in the backend for getting the songs specifically
  useEffect(() => {
    fetch(`${BASE_URL}/playlists/${playlistId}/songs`)
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, [playlistId]);

  return (
    <div>
      <h3>Songs on this Playlist</h3>
      <ListGroup as="ol" numbered>
        {songs.map((song) => (
          <ListGroup.Item as="li" key={song.id}>
            {song.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PlaylistSongs;
