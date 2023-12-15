import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const PlaylistCard = () => {
  return (
    <Card
      style={{
        width: "18rem",
        padding: "10px",
        margin: "10px",
        background: "#11150d",
        color: "white",
      }}
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Playlist Title</Card.Title>
        <Card.Text color={"gray"}>Description</Card.Text>

        <br />

        <Card.Text>Rating</Card.Text>
        <Card.Text>Date Created</Card.Text>
        <Button
          variant="primary"
          style={{ background: "#526a40", border: "0px" }}
        >
          View playlist
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PlaylistCard;
