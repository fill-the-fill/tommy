import React from "react";
import Grid from "@mui/material/Grid";

import 'react-lazy-load-image-component/src/effects/blur.css';


function Home() {
  return (
    <Grid
      container
      style={{marginTop: 10}}
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
      >
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
      </Carousel> */}
    </Grid>
  );
}

// const itemData = [
//   {
//     img: image0,
//   },
//   {
//     img: image1,
//   },
//   {
//     img: image2,
//   },
//   {
//     img: image3,
//   },
//   {
//     img: image4,
//   },
//   {
//     img: image5,
//   },
//   {
//     img: image6,
//   },
//   {
//     img: image7,
//   },
//   {
//     img: image8,
//   },
//   {
//     img: image9,
//   },
//   {
//     img: image10,
//   },
//   {
//     img: image11,
//   },
//   {
//     img: image12,
//   },
//   {
//     img: image13,
//   },
//   {
//     img: image14,
//   },

//   {
//     img: image15,
//   },
// ];

export default Home;
