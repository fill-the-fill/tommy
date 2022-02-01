import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useStyles } from "../utils/uiStyles";
import { useMediaQuery, useTheme } from "@material-ui/core/";

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

export default function Commisions() {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.pagePadding}>
      <ImageList variant="masonry" cols={xs ? 1 : sm ? 2 : 3} gap={20}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className={classes.commissionImg}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: image0,
    title: "Breakfast",
  },
  {
    img: image1,
    title: "Breakfast",
  },
  {
    img: image2,
    title: "Breakfast",
  },
  {
    img: image3,
    title: "Breakfast",
  },
  {
    img: image4,
    title: "Breakfast",
  },
  {
    img: image5,
    title: "Breakfast",
  },
  {
    img: image6,
    title: "Breakfast",
  },
  {
    img: image7,
    title: "Breakfast",
  },
  {
    img: image8,
    title: "Breakfast",
  },
  {
    img: image9,
    title: "Breakfast",
  },
  {
    img: image10,
    title: "Breakfast",
  },
  {
    img: image11,
    title: "Breakfast",
  },
  {
    img: image12,
    title: "Breakfast",
  },
  {
    img: image13,
    title: "Breakfast",
  },
  {
    img: image14,
    title: "Breakfast",
  },

  {
    img: image15,
    title: "Breakfast",
  },
];
