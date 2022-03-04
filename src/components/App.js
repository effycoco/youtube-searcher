import React, { useState, useEffect } from "react";
import SearchBar from "./SeachBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const defaultSearch = "";

  useEffect(() => {
    // 初次渲染时，用默认搜索词向api发出请求
    handleSearchBarSubmit(defaultSearch);
  }, []);

  const handleSearchBarSubmit = async (term) => {
    if (!term.trim().length) return;
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <SearchBar
        onSearchBarSubmit={handleSearchBarSubmit}
        defaultSearch={defaultSearch}
      />
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column ">
            <VideoList onVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
