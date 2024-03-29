import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedNews, clearSelectedNews } from "../actions";
import { bindActionCreators } from "redux";
import LikeCounter from "./LikesCounter";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.selectedNews(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSelectedNews();
  }

  renderNews = ({ selected }) => {
    if (selected) {
      return selected.map(item => {
        return (
          <div key={item.id}>
            <div className="tags">
              <span>
                <i className="fa fa-eye" />
                {item.views}
              </span>
              <span>
                <i className="fa fa-thumbs-up" />
                {item.likes[0]}
              </span>
              <span>
                <i className="fa fa-thumbs-down" />
                {item.likes[1]}
              </span>
            </div>

            <div className="top">
              <h2>{item.title}</h2>
              <span>
                Artist by: <strong>{item.author}</strong>{" "}
              </span>
            </div>
            <img alt={item.title} src={`/images/articles/${item.img}`} />
            <div className="body_news">{item.body}</div>
            <div>
              <LikeCounter
                articleId={item.id}
                type="HANDLE_LIKES_ARTICLE"
                section="articles"
                likes={item.likes[0]}
                dislikes={item.likes[1]}
              />
            </div>
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div className="news_container">
        {this.renderNews(this.props.articles)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("News : mapStateToProps : state ", state);
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectedNews, clearSelectedNews }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
