import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { BASE_URL } from "../utils";

function AddPlaylist() {
  const initialData = {
    title: "",
    description: "",
    image: "",
    rating: "",
    date_created: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // console.log(formData);

  function handleFormSubmit(event) {
    event.preventDefault();

    //set isloading to true because the form is loading
    setIsLoading(true);

    // the fetch api that will be working with our server
    fetch(`${BASE_URL}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        // if the fetching was a success then we reset the form to having no values
        setFormData(initialData);

        //then we stop the loading
        setIsLoading(false);
      })
      .catch((err) => {
        //setIsloading(false)
        console.log(err);
      });

    // setTimeout(() => {
    //   console.log("Form submitted");
    //   setIsLoading(false);
    // }, 5000);

    console.log(formData);
  }

  return (
    /* Main container */
    <Stack
      style={{
        background: "#11150d",
        color: "white",
        padding: "20px",
        height: "100%",
      }}
    >
      {/* Sub-container with everything else   */}
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
            <Form onSubmit={handleFormSubmit}>
              {/* Title */}

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  style={
                    {
                      // width: "70vh",
                    }
                  }
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
                  required
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
                  required
                  type="date"
                  name="date_created"
                  value={formData["date_created"]}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* Submit Button */}
              <>
                <Button
                  // isloading={isLoading}
                  variant="success"
                  style={{
                    width: "60vh",
                  }}
                  type="submit"
                >
                  Submit Playlist
                </Button>
              </>
            </Form>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
}

export default AddPlaylist;
