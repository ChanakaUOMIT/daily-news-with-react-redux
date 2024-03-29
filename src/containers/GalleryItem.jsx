import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedGallery, clearSelectedGallery } from "../actions";
import { bindActionCreators } from "redux";
import Slider from "react-slick";
import LikesCounter from "./LikesCounter";

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500
};

class GalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.selectedGallery(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSelectedGallery();
  }

  renderSlider = ({ selected }) => {
    if (selected) {
      const gallery = selected[0];
      return (
        <div>
          <h3>The best of {gallery.artist}</h3>
          <Slider {...settings}>
            {gallery.images.map((item, index) => {
              return (
                <div key={index} className="slide-item">
                  <div>
                    <div
                      className="image"
                      style={{
                        background: `url(/images/galleries/${item.img})`
                      }}
                    />
                  </div>
                  <div className="description">
                    <span>{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div>
            <LikesCounter
              articleId={gallery.id}
              type="HANDLE_LIKES_GALLERY"
              section="galleries"
              likes={gallery.likes[0]}
              dislikes={gallery.likes[1]}
            />
          </div>
        </div>
      );
    }
  };

  render() {
    const item = this.props.gallery;
    return <div className="slide-item-wrap">{this.renderSlider(item)}</div>;
  }
}

function mapStateToProps(state) {
  console.log("GalleryItem : mapStateToProps : state ", state);
  return {
    gallery: state.gallery
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectedGallery, clearSelectedGallery },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryItem);
