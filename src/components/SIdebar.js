// Sidebar.js

import React from "react";

function Sidebar({ playlists }) {
  function handleClickTitle(event) {
    console.log(event);
  }
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
          <ol
            key={playlist.id}
            style={{ marginBottom: "10px" }}
            onClick={handleClickTitle}
          >
            {playlist.title}
          </ol>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
