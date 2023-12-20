import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import Sidebar from "./Sidebar";
//import background2 from "../imagesForApp/background2.jpeg";

function Navbar({ toggleSidebar }) {
  return (
    <Stack
      direction="horizontal"
      gap={5}
      style={{
        paddingTop: "11vh",
        paddingBottom: "10px",
        background: "#111111",
        //backgroundImage: `url(${background2})`,
        color: "white",
      }}
    >
      <Button
        onClick={toggleSidebar}
        style={{
          background: "white",
          height: "30px",
          width: "80px",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          textDecoration: "none",
          border: "0px",
          marginRight: "10px",
        }}
      >
        See All
      </Button>
      <div className="p-2">Playlistpilot</div>

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
