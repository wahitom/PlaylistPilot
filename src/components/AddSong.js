import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { BASE_URL } from "../utils";

const AddSong = ({ showModal, handleClose, playlistId, playlistTitle }) => {
  //initial data of the form which starts out as empty
  const initialData = {
    name: "",
  };

  // handling the addition of information to the form
  const [formData, setFormData] = useState(initialData);

  //isloading state
  //const [isLoading, setIsLoading] = useState(false);

  // handling the inputs
  function handleChangeForm(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    //console.log(formData);
  }

  //handling the submitting
  function handleForm(event) {
    event.preventDefault();

    //set loading to true before submitting
    //setIsLoading(true);

    const data = {
      ...formData,
      playlist_id: playlistId,
      user_id: 1,
    };

    //console.log(data);

    fetch(`${BASE_URL}/songs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        handleClose();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        {/* Form handling eveything */}
        <Form onSubmit={handleForm}>
          <Modal.Header closeButton>
            <Modal.Title>Add Song to {playlistTitle} Paylist</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* form inside the modal body */}
            <>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Song Name and Artist </Form.Label>
                <Form.Control
                  required
                  placeholder="Umbrella by Rihanna"
                  autoFocus
                  name="name"
                  value={formData["name"]}
                  onChange={handleChangeForm}
                />
              </Form.Group>
            </>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              style={{ background: "#526a40", border: "0px" }}
              type="submit"
              //   isLoading = {isLoading}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddSong;
