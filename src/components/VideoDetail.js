import React from "react";
const VideoDetail = ({ video }) => {
  if (!video) return "Loading...";
  // 作用： 如果不加这一行，当还未搜索及还未从api取得数据时，video=null,试图读取其property会报错
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          // 这个地址是在youtube视频点分享-embed知道的
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header"> {video.snippet.title}</h4>
        <p>{video.snippet.description} </p>
      </div>
    </div>
  );
};
export default VideoDetail;
