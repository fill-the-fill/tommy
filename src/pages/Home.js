import React from "react";
import Grid from "@mui/material/Grid";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

function Home() {
  return (
    <Grid
      container
    >
      {/* <Carousel
        indicatorIconButtonProps={{
          style: {
            display: "none",
          },
        }}
        indicator={{
          transition: "50ms",
        }}
      > */}
        {itemData.map((image, index) => {
          return (
            <LazyLoadImage
              key={index}
              style={{
                width: "100%",
                objectFit: "contain",
                height: "100%",
                position: "fixed",
              }}
              src={image.img}
              alt="carousel"
            />
          );
        })}
      {/* </Carousel> */}
    </Grid>
  );
}

const itemData = [
  {
    img: image0,
  },
  {
    img: image1,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
  {
    img: image4,
  },
  {
    img: image5,
  },
  {
    img: image6,
  },
  {
    img: image7,
  },
  {
    img: image8,
  },
  {
    img: image9,
  },
  {
    img: image10,
  },
  {
    img: image11,
  },
  {
    img: image12,
  },
  {
    img: image13,
  },
  {
    img: image14,
  },

  {
    img: image15,
  },
];

export default Home;
