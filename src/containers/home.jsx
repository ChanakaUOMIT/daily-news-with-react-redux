import React, { Component } from "react";
import { connect } from "react-redux";
import LatestNews from "../components/home/Latest";
import { latestNews, otherNews, latestGallery } from "../actions";
import { bindActionCreators } from "redux";
import OtherNews from "../components/home/OtherNews";
import Gallery from "../components/home/Gallery";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Home : Constructor ");
  }

  componentDidMount() {
    console.log("Home : componentDidMount : ", this.props);
    this.props.latestNews();

    this.props.otherNews();
    this.props.latestGallery();
  }

  render() {
    return (
      <div>
        <LatestNews latest={this.props.articles.latest} />
        <OtherNews otherNews={this.props.articles.other} />
        <Gallery latestGallery={this.props.gallery.latestGallery} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("home : mapStateToProps : state : ", state);
  return {
    articles: state.articles,
    gallery: state.gallery
  };
}

function mapDispatchToProps(dispatch) {
  console.log("Home : mapDispatchToProps ");
  return bindActionCreators({ latestNews, otherNews, latestGallery }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
