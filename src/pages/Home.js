import React from "react";
import { useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";

import PlaylistCard from "../components/PlaylistCard";

function Home() {
  const [playlists, setPlaylists] = useState(new Array(12).fill(Math.random()));

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
        {playlists.map((_, index) => (
          <PlaylistCard key={index} sm={12} md={4} lg={3} />
        ))}
      </Row>
    </div>
  );
}

export default Home;
