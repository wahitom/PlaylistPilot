import React from "react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Button, Col, Form, Row, Stack } from "react-bootstrap";

import PlaylistCard from "../components/PlaylistCard";
import { BASE_URL } from "../utils";

const single_playlist = [
  {
    id: 1,
    title: "Greatest Hits",
    description: "These are the Greatest Of All Time",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    date_created: "15-12-2023",
  },
];

function Home() {
  const [playlists, setPlaylists] = useState(single_playlist);
  //search for playlists
  const [searchTerm, setSearchTerm] = useState("");

  //add useEffect to fetch our data
  useEffect(() => {
    const handleFetchData = () => {
      fetch(`${BASE_URL}/playlists`)
        .then((res) => res.json())
        .then((playlist) => setPlaylists(playlists))
        .catch((err) => console.log(err));
    };

    handleFetchData();
  }, []);

  //searched playlists
  const searchedPlaylists = playlists.filter((playlist) =>
    playlist.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Search for playlists input and button area*/}
      <form>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Search Playlists"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <Button
            variant="secondary"
            type="submit"
            style={{ background: "#314026" }}
          >
            Search
          </Button>
        </Stack>
      </form>

      {/* Our playlist display */}

      {searchedPlaylists.length > 0 ? (
        <Row style={{ padding: "10px" }}>
          {/* adjust view according to screen size */}
          {searchedPlaylists.map((playlist, index) => (
            <PlaylistCard key={index} {...playlist} sm={12} md={4} lg={3} />
          ))}
        </Row>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "40vh",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          <span style={{ marginRight: "8px" }}>No Playlists Found.</span>
          <Link to="/add-playlist"> Add New?</Link>
        </div>
      )}
    </div>
  );
}

export default Home;
