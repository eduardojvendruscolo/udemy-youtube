import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const onTermSubmit = async (term) => {
    let response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    onTermSubmit("sport car");
  }, []);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <h3>{`i have ${videos.length} videos`} </h3>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {selectedVideo && <VideoDetail selectedVideo={selectedVideo} />}
          </div>

          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
