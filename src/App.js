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
    <>
      <Navbar />

      <div>
        <div>
          <div
            style={{
              padding: "35px",
              height: "100vh",
              // background: "gray",
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
    </>
  );
}

export default App;
