import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Config from "../config/index.json";
import Grid from "@mui/material/Grid";

import image0 from "../utils/collection-1/image0-min.jpg";
import image1 from "../utils/collection-1/image1-min.jpg";
import image2 from "../utils/collection-1/image2-min.jpg";
import image3 from "../utils/collection-1/image3-min.jpg";
import image4 from "../utils/collection-1/image4-min.jpg";
import image5 from "../utils/collection-1/image5-min.jpg";
import image6 from "../utils/collection-1/image6-min.jpg";
import image7 from "../utils/collection-1/image7-min.jpg";
import image8 from "../utils/collection-1/image8-min.jpg";
import image9 from "../utils/collection-1/image9-min.jpg";
import image10 from "../utils/collection-1/image10-min.jpg";
import image11 from "../utils/collection-1/image11-min.jpg";
import image12 from "../utils/collection-1/image12-min.jpg";
import image13 from "../utils/collection-1/image13-min.jpg";
import image14 from "../utils/collection-1/image14-min.jpg";
import image15 from "../utils/collection-1/image15-min.jpg";

export default class Fade extends Component {
  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 14,
      autoplay: true,
      autoplaySpeed: 4500,
      cssEase: "linear",
      fade: true,
    };
    return (
      <div style={{overflow: 'hidden'}}>
        <Slider {...settings}>
          {itemData.map((e) => {
            return (
              <div>
                <img
                  src={e.image}
                  alt="test"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "80vh",
                    marginBottom: 15,
                  }}
                />
              </div>
            );
          })}
        </Slider>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <div>{Config.data.homepage.text}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const itemData = [
  {
    image: image0,
  },
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
  {
    image: image9,
  },
  {
    image: image10,
  },
  {
    image: image11,
  },
  {
    image: image12,
  },
  {
    image: image13,
  },
  {
    image: image14,
  },

  {
    image: image15,
  },
];
