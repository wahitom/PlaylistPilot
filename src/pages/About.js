import React from "react";
import background4 from "../imagesForApp/background4.jpeg";

const About = () => {
  return (
    <div
      style={{
        padding: "40px",
        background: "#11150d",
        //height: "100vh",
        color: "white",
        borderRadius: "0px",
        backgroundImage: `url(${background4})`,
      }}
    >
      <h1>About Playlistpilot</h1>
      <p>
        Playlistpilot is a web application designed to make playlist management
        and song addition a breeze. Whether you're organizing your favorite
        tracks or creating mood-specific playlists, our app has got you covered.
      </p>
      <p>
        Features:
        <ul>
          <li>Create and manage playlists with ease.</li>
          <li>Add your favorite songs to playlists effortlessly.</li>
          <li>
            Discover new songs and build the perfect playlists for any occasion.
          </li>
        </ul>
      </p>
      <p>
        How to Use:
        <ol>
          <li>Explore the homepage to discover existing playlists.</li>
          <li>Create a new playlist and customize its details.</li>
          <li>Add songs to your playlists using the "Add Song" feature.</li>
        </ol>
      </p>
      <p>
        Thank you for using Playlistpilot! We hope you enjoy organizing and
        listening to your favorite music in a whole new way.
      </p>
    </div>
  );
};

export default About;
