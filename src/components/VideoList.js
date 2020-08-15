import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos);
  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => {
        return (
          <VideoItem
            video={video}
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
