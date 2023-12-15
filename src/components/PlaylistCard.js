import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const PlaylistCard = ({ image, title, description, rating, date_created }) => {
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
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <Card.Text>Description : {description}</Card.Text>

        <br />

        <Card.Text>Rating : {rating}</Card.Text>
        <Card.Text>Date Created : {date_created}</Card.Text>
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
