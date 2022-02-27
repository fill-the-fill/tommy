import React from "react";
import Grid from "@mui/material/Grid";

import { Carousel } from "react-carousel-minimal";

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
    <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center" >
      <Carousel
        data={itemData}
        time={4000}
        // width="100%"
        height="100%"
        slideNumber={false}
        captionPosition="bottom"
        automatic={true}
        dots={false}
        slideImageFit="contain"
        thumbnails={false}
      />
    </Grid>
  );
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

export default Home;
