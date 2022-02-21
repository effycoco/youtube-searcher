import React from "react";
import SearchBar from "./SeachBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  defaultSearch = "";

  componentDidMount() {
    // 初次渲染时，用默认搜索词向api发出请求
    this.handleSearchBarSubmit(this.defaultSearch);
  }
  handleSearchBarSubmit = async (term) => {
    if (!term.trim().length) return; // 不搜索空字符串
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response); // 显示获取的数据
    // 根据response object的结构可知，我们关心的信息都在response.data.items里
    // 将其添加为App组件的一个state,由于items是array,所以将其初始值设为empty array
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    }); // 一旦取得api返回的数据就更新
  };
  handleVideoSelect = (video) => {
    // console.log("From the App!", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar
          onSearchBarSubmit={this.handleSearchBarSubmit}
          defaultSearch={this.defaultSearch}
        />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column ">
              <VideoList
                onVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
