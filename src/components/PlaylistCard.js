import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Card } from "react-bootstrap";
import AddSong from "./AddSong";

const PlaylistCard = ({
  id,
  image,
  title,
  description,
  rating,
  date_created,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card
        style={{
          width: "18rem",
          padding: "10px",
          margin: "10px",
          background: "#11150d",
          color: "white",
        }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text>Description : {description}</Card.Text>

          <br />

          <Card.Text>Rating : {rating}</Card.Text>
          <Card.Text>Date Created : {date_created}</Card.Text>

          <Link to={`/playlists/${id}/songs`}>
            <Button
              variant="primary"
              style={{ background: "#526a40", border: "0px" }}
            >
              View Playlist
            </Button>
          </Link>

          <Button
            variant="primary"
            style={{ background: "#526a40", border: "0px", marginLeft: "10px" }}
            onClick={handleShowModal}
          >
            Add Song
          </Button>

          <AddSong
            showModal={showModal}
            handleClose={handleCloseModal}
            playlistId={id}
            playlistTitle={title}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default PlaylistCard;
