import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";

import PlaylistCard from "../components/PlaylistCard";

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

  return (
    <div>
      {/* Search for playlists area */}
      <form>
        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Search Playlists" />

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

      {/* <div style={{ display: "flex", direction: "column" }}></div> */}

      <Row style={{ padding: "10px" }}>
        {/* adjust view according to screen size */}
        {playlists.map((playlist, index) => (
          <PlaylistCard key={index} {...playlist} sm={12} md={4} lg={3} />
        ))}
      </Row>
    </div>
  );
}

export default Home;
