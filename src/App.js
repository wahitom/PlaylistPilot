// App.js

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPlaylist from "./pages/AddPlaylist";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BASE_URL } from "./utils";

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const handleFetchData = () => {
      fetch(`${BASE_URL}/playlists`)
        .then((res) => res.json())
        .then((playlists) => setPlaylists(playlists))
        .catch((err) => console.log(err));
    };

    handleFetchData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />

      <div style={{ display: "flex", height: "100vh" }}>
        {isSidebarVisible && <Sidebar playlists={playlists} />}

        <div style={{ flex: 2, overflow: "auto" }}>
          <div
            style={{
              padding: "20px",
              maxWidth: "1200px", // Adjust this value as needed
              margin: "0 auto",
            }}
          >
            <Routes>
              <Route path="/" element={<Home playlists={playlists} />} />
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
