// Sidebar.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fetch playlists for the sidebar
    fetch(`${BASE_URL}/playlists`)
      .then((res) => res.json())
      .then((data) => setPlaylists(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        width: "30vh",
        padding: "15px",
        background: "#11150d",
        color: "white",
      }}
    >
      <h6>My Playlists</h6>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <Link to={`/playlists/${playlist.id}/songs`}>
              <ol>{playlist.title}</ol>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
