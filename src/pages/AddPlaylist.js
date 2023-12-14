import React from "react";
import { Stack } from "react-bootstrap";

function AddPlaylist() {
  return (
    <Stack style={{ height: "100vh", background: "pink" }}>
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

          <input type="text" className="p-2"></input>
          <input type="text" className="p-2"></input>
          <input type="text" className="p-2"></input>
        </Stack>
      </div>
    </Stack>
  );
}

export default AddPlaylist;
