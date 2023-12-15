import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";

function AddPlaylist() {
  const initialData = {
    title: "",
    description: "",
    image: "",
    rating: "",
    date_created: "",
  };
  const [formData, setFormData] = useState(initialData);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  console.log(formData);

  return (
    <Stack
      style={{
        background: "#11150d",
        color: "white",
        padding: "20px",
        height: "100%",
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
                <Form.Control
                  style={{
                    width: "70vh",
                  }}
                  type="text"
                  name="title"
                  placeholder="Playlist Title"
                  value={formData["title"]}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Description */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Playlist Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData["description"]}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* playlist image */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Playlist Image</Form.Label>
                <Form.Control
                  type="text"
                  rows={3}
                  name="image"
                  value={formData["image"]}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Playlist rating*/}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Playist Rating </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Rate me!"
                  name="rating"
                  value={formData["rating"]}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Date playlist was added */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date Created </Form.Label>
                <Form.Control
                  type="date"
                  name="date_created"
                  value={formData["date_created"]}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>

            {/* Submit Button */}
            <>
              <Button variant="success" style={{ width: "60vh" }}>
                Submit Playlist
              </Button>
            </>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

export default AddPlaylist;
