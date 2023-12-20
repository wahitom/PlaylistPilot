// Sidebar.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";

import background1 from "../imagesForApp/background1.jpeg";

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
        backgroundImage: `url(${background1})`,
        color: "white",
      }}
    >
      <ul>
        <h6 style={{ marginBottom: "20px" }}>My Playlists</h6>
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <Link
              to={`/playlists/${playlist.id}/songs`}
              style={{
                textDecoration: "none", // Remove underline
                color: "white",
                marginBottom: "10px", // Add spacing between lines
                display: "block", // Make the link a block element
              }}
            >
              <ol>{playlist.title}</ol>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
