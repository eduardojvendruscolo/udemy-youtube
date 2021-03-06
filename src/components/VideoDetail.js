import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  const videoSrc = `https://youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>

      <div className="ui segment">
        <h4 className="ui header"> {selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
