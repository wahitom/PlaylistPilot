import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddPlaylist from "./pages/AddPlaylist";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import SIdebar from "./components/SIdebar";
import { Stack } from "react-bootstrap";

//import './App.css';

function App() {
  return (
    <div style={{ background: "#b5ea8c", height: "100%" }}>
      <Navbar />

      <div style={{ height: "100vh" }}>
        <div>
          <div
            style={{
              padding: "35px",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/add-playlist" element={<AddPlaylist />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
