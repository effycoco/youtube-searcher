import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearch) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // 初次渲染时，用默认搜索词向api发出请求
    search(defaultSearch);
  }, []); // 如果出现warning，useEffect has a missing dependency,将第二个参数空数组改成[defaultSearch]
  const search = async (term) => {
    if (!term.trim().length) return;
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search]; // 也可以返回object {videos,search}
};
export default useVideos;
