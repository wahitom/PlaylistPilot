import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Form, Row, Stack } from "react-bootstrap";

import PlaylistCard from "../components/PlaylistCard";
import { BASE_URL } from "../utils";

const single_playlist = [
  {
    id: "",
    title: "",
    description: "",
    image: "",
    rating: "",
    date_created: "",
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
        .then((playlists) => setPlaylists(playlists))
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
