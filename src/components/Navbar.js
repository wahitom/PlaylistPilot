import React from "react";
import { Link, NavLink } from "react-router-dom";

import Stack from "react-bootstrap/Stack";

function Navbar() {
  return (
    <Stack
      direction="horizontal"
      gap={5}
      style={{
        paddingTop: "60px",
        paddingBottom: "10px",
        background: "#11150d",
        color: "white",
      }}
    >
      <div className="p-2">Logo</div>

      <Stack
        direction="horizontal"
        gap={5}
        style={{ padding: "10px", marginLeft: "10vh" }}
      >
        <NavLink
          to="/"
          style={{
            background: "white",
            height: "30px",
            width: "70px",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Home
        </NavLink>
        <Link
          to="/add-playlist"
          style={{
            background: "white",
            height: "30px",
            width: "100px",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Add Playlist
        </Link>
        <Link
          to="/about"
          style={{
            background: "white",
            height: "30px",
            width: "100px",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          About Us
        </Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
