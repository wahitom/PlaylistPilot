import React from "react";
import { Link } from "react-router-dom";

import Stack from "react-bootstrap/Stack";

function Navbar() {
  return (
    <Stack
      direction="horizontal"
      gap={5}
      style={{ paddingTop: "30px", paddingBottom: "10px", background: "pink" }}
    >
      <div className="p-2">Logo</div>

      <Stack
        direction="horizontal"
        gap={5}
        style={{ padding: "10px", marginLeft: "20vh" }}
      >
        <Link to="/">Home</Link>
        <Link to="/add-playlist">Add Playlist</Link>
        <Link to="/about">About Us</Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
