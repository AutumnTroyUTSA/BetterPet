import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&h=497&w=1920`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2&h=994&w=3840 2x`,
    };
}

export default function QuiltedImage() {
    const itemData = {
        img: "https://raw.githubusercontent.com/AutumnTroyUTSA/BetterPet/main/frontend/Images/mainLarge2.png",
        title: "Better Pet",
        rows: 2,
        cols: 2,
    };

    return (
        <ImageList
            sx={{ height: 508, flex: 1 }}
        >
            <ImageListItem key={itemData.img} cols={itemData.cols || 1} rows={itemData.rows || 1}>
                <img
                    {...srcset(itemData.img, 121, itemData.rows, itemData.cols)}
                    alt={itemData.title}
                    loading="lazy"
                />
            </ImageListItem>
        </ImageList>
    );
}