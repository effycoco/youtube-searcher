import axios from "axios";
const KEY = "AIzaSyAg58FPu4ekAphI1jYnkZyzA1dXW_q0eWw";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet", // 必选项
    maxResult: 5,
    key: KEY,
    type: "videos", // 表示只搜索视频，不搜索视频列表
  },
});
// 导出  一个使用自定义配置新建的axios实例
// make a pre configured instance of Axios that already
// has a base URL and some default parameters loaded into it.

// 参数来自 https://developers.google.com/youtube/v3/docs/search/list#request ,
// 这个网址是搜索youtube api search得到的；
// baseURL的地址是request GET后地址去掉最后的'/search'
