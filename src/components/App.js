import React, { useState, useEffect } from "react";
import SearchBar from "./SeachBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import useVideos from "../hooks/useVideos";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const defaultSearch = "";
  const [videos, search] = useVideos(defaultSearch);
  useEffect(() => setSelectedVideo(videos[0]), [videos]);

  return (
    <div className="ui container">
      <SearchBar onSearchBarSubmit={search} defaultSearch={defaultSearch} />
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(video) => setSelectedVideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
