import React from "react";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";

import image0 from "../utils/collection-1/image0.jpg";
import image1 from "../utils/collection-1/image1.jpg";
import image2 from "../utils/collection-1/image2.jpg";
import image3 from "../utils/collection-1/image3.jpg";
import image4 from "../utils/collection-1/image4.jpg";
import image5 from "../utils/collection-1/image5.jpg";
import image6 from "../utils/collection-1/image6.jpg";
import image7 from "../utils/collection-1/image7.jpg";
import image8 from "../utils/collection-1/image8.jpg";
import image9 from "../utils/collection-1/image9.jpg";
import image10 from "../utils/collection-1/image10.jpg";
import image11 from "../utils/collection-1/image11.jpg";
import image12 from "../utils/collection-1/image12.jpg";
import image13 from "../utils/collection-1/image13.jpg";
import image14 from "../utils/collection-1/image14.jpg";
import image15 from "../utils/collection-1/image15.jpg";

function Home() {
  return (
    <Grid
      container
      style={{
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Carousel
        indicatorIconButtonProps={{
          style: {
            display: "none",
          },
        }}
        indicator={{
          transition: "50ms",
        }}
      >
        {itemData.map((image, index) => {
          return (
            <img
              key={index}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100vh",
                position: "fixed",
              }}
              src={image.img}
              alt="carousel"
            />
          );
        })}
      </Carousel>
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
