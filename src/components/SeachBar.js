import React from "react";

class SearchBar extends React.Component {
  state = { term: this.props.defaultSearch }; // 用state里面的term代表输入的搜索词

  handleInput = (event) => {
    this.setState({ term: event.target.value });
  }; // 这里必须用箭头函数，才能将this与组件绑定，否则是undefined
  handleSubmit = (event) => {
    event.preventDefault(); // 使每次用户enter提交时浏览器不会自动刷新页面
    // TODO: make sure we call callback from parent component
    this.props.onSearchBarSubmit(this.state.term); // 把搜索词传递给parent
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
