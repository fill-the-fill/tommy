import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useStyles } from "../utils/uiStyles";
import "../App.css";
import { useMediaQuery, useTheme } from "@material-ui/core/";

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
            <div className="image-hover-wrapper">
              <a target="_blank" href={item.opensea} rel="noreferrer">
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  className={classes.commissionImg}
                />
                <span className="image-hover-wrapper-reveal">
                  <p>
                    <b>View on OpenSea</b>
                  </p>
                </span>
              </a>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: image0,
    title: "Soon To Be Happy Person",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903576840722448385"
  },
  {
    img: image1,
    title: "Put Your Mask On",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903591134373609473"
  },
  {
    img: image2,
    title: "Stalemate",
    opensea: 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903583437792215041'
  },
  {
    img: image3,
    title: "Hope",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903590034861981697"
  },
  {
    img: image4,
    title: "Rushing Home",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903588935350353921"
  },
  {
    img: image5,
    title: "Between Races",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903577940234076161"
  },
  {
    img: image6,
    title: "Busted",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903585636815470593"
  },
  {
    img: image7,
    title: "Cargo",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903581238768959489"
  },
  {
    img: image8,
    title: "Catch of the Day",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903593333396865025"
  },
  {
    img: image9,
    title: "Main St",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903580139257331713"
  },
  {
    img: image10,
    title: "Baby",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903582338280587265"
  },
  {
    img: image11,
    title: "Spitting Fire",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903587835838726145"
  },
  {
    img: image12,
    title: "Town Sqaure",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903584537303842817"
  },
  {
    img: image13,
    title: "Waiting",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903592233885237249"
  },
  {
    img: image14,
    title: "Buddies",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903579039745703937"
  },

  {
    img: image15,
    title: "Joy",
    opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/49976460030587573896446745181390390062482189787468643108750903586736327098369"
  },
];
