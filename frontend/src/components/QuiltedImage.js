import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImage() {
  return (
    <ImageList
      sx={{  height: 450, flex:1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://www.stockvault.net/data/2007/03/01/100489/preview16.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.stockvault.net/data/2012/05/17/130869/preview16.jpg",
    title: "Burger",
  },
  {
    img: "https://static01.nyt.com/images/2023/03/07/science/00SCI-ANIMAL-TESTING1/00SCI-ANIMAL-TESTING1-superJumbo.jpg?quality=75&auto=webp",
    title: "Camera",
  },
  {
    img: "https://vcahospitals.com/-/media/2/vca/images/lifelearn-images-foldered/1043/corn_snake.ashx",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://www.fearfreehappyhomes.com/wp-content/uploads/2022/08/Depositphotos_251800540_S.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i0.wp.com/www.ecomena.org/wp-content/uploads/2020/11/tarantula-as-a-pet.jpg?ssl=1",
    title: "Basketball",
  },
  {
    img: "https://thumbs.dreamstime.com/z/group-pets-sitting-front-white-background-19571736.jpg",
    title: "Fern",
  },
];
