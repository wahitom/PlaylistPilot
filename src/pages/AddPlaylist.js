import React from "react";
import { Form, Stack } from "react-bootstrap";

function AddPlaylist() {
  return (
    <Stack
      style={{
        background: "#11150d",
        color: "white",
        padding: "30px",
      }}
    >
      <div>
        <Stack
          gap={3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Add Playlist</h1>

          <Stack
            gap={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Form>
              {/* Title */}

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Playlist Title" />
              </Form.Group>

              {/* Description */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Playlist Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              {/* Number of  Songs */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Number of songs </Form.Label>
                <Form.Control type="number" placeholder="Number of Songs " />
              </Form.Group>

              {/* Date playlist was added */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date Created </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

export default AddPlaylist;
